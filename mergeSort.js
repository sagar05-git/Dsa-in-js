
// merge sort
// Merge Sort is a Divide and Conquer sorting algorithm.
// Divide → Sort → Merge
// divide the array into subarray ,each array contain only one element(an array with one element is sorted already)
// repeatedly merge the sub arrays to produce new sorted sub arrays,until there is only
// one subarray remaining.that will be the sorted array.

// time complexity O(nlogn)//half and one loop

const mergeSort=(arr)=>{
    if(arr.length<=1){
        return arr
    }
    let middle=Math.floor(arr.length/2)//middle index if even select 
    //now divide
    let left=arr.slice(0,middle);//not include middle in left array
    let right=arr.slice(middle,arr.length)//include all the element or we also write let right=arr.slice(middle)
    
    // recursivly sort both halves
    const sortedLeft=mergeSort(left)
    const sortedRight=mergeSort(right)
    return merge(sortedLeft,sortedRight)

}
const merge=(leftArr,rightArr)=>{
    console.log(leftArr,rightArr,"leftArr and rightArr")
    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        // check for 0 index
        if(leftArr[0]<=rightArr[0]){
            // sortedArr.push(leftArr[0]);
            sortedArr.push(leftArr.shift());//we use shift here this also remove element from left array 
        }else{
            // sortedArr.push(rightArr[0]);
            sortedArr.push(rightArr.shift());
        }
        console.log(sortedArr,"sortedArr count")
    }
    
    return [...sortedArr,...leftArr,...rightArr];//if elements are left in the leftArr and rightArr
}
console.log(mergeSort([7, 2, 1, 6, 8, 5, 3, 4]))