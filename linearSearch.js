// linear search linear search linear search linear search

// find index of element in the array

// O(n)
// const index=(arr,n)=>{
//    return arr.indexOf(n)
// }
// console.log(index([1,2,3,4,5,6],7))

O(n)
const index=(arr,n)=>{
   for(let i=0;i<arr.length;i++){
    if(arr[i]===n) {
        return i
    }
   }
   return -1
}
console.log(index([1,2,3,4,5,6],10))
