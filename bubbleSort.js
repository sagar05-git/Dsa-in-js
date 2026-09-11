// sorting algorithms

// ascending order
// const sorting=(arr)=>{
//     return arr.sort((a,b)=>a-b)
// }
// console.log(sorting([-1,-10,3,2,5,6,7]))
// descending order
// const sorting=(arr)=>{
//     return arr.sort((a,b)=>b-a)
// }
// console.log(sorting([-1,-10,3,2,5,6,7]))


// 1 bubble sort 
// arrange in ascending order

// compare the adjents elements in the array and swap the position if they are not intended order
// repet the instruction as you step through each element in array
// Once you step through the whole array with no swaps,the array is sorted
// in bubble sort use third variable

// O(n^2)
const bubbleSort=(arr)=>{
    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            // // ascending order 
            // if(arr[i]>arr[j]){
            //     temp=arr[i]
            //     arr[i]=arr[j]
            //     arr[j]=temp
            // }
            // descending order 
            if(arr[i]<arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([-1,-10,3,2,5,6,7]))
