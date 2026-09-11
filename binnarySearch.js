
// binary search binary search binary search binary search--binary search only works on sorted array
// if array is empty ,return -1 as the element cannot be found
// if array has elements find the middle element and if matches retun that element index
// if target is less than middle element ,so element is in left half
// if target is greater than middle element ,so element is in right half


// O(logn)
const binnarySearch=(arr,n)=>{
    let leftIndex=0
    let rightIndex=arr.length-1
// repet until array is not empty
    while(leftIndex<=rightIndex){
        let middleindex=Math.floor((leftIndex+rightIndex)/2)//get lower index if even number of item present
        // console.log(middleindex,"middleindex")
        // check target is equal to middle element
        if(n===arr[middleindex]) return middleindex;
        // if target item value is less then middleIndex item so we presue left half else right half
        if(n<arr[middleindex]){
            rightIndex=middleindex-1;//change right index 
            // console.log(rightIndex,"rightIndex")
        }else{
            leftIndex=middleindex+1;//change left index 
            // console.log(leftIndex,"leftIndex")
        }

    }
    return -1
}
console.log(binnarySearch([1,2,3,4,5,6,7,8,9,10],14))

O(logn)
const recursiveBinnarySearch=(arr,target)=>{
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex) return -1;//not found
    let middleIndex=Math.floor((leftIndex+rightIndex)/2)//lower index
    if(target === arr[middleIndex]){
        return middleIndex;
    }
    if(target < arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex-1)
    }
    if(target>arr[middleIndex]){
        return search(arr,target,middleIndex+1,rightIndex)
    }

}
console.log(recursiveBinnarySearch([1,2,3,4,5,6,7,8,9,10],14))
console.log(recursiveBinnarySearch([1,2,3,4,5,6,7,8,9,10],8))
console.log(recursiveBinnarySearch([1,2,3,4,5,6,7,8,9,10],9))
