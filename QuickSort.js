
// Quick sort

// identify the pivot element in the array 
// pick first element as pivot element 
// pick last element as pivot element 
// pick random element as pivot element 
// pick median as pivot element 
// The pivot is the element around which we divide the array.
// Think of it as a boundary value:
// Elements smaller than pivot → go to the left
// Elements greater than pivot → go to the right


// 1. Choose a pivot
// 2. Put smaller elements on the left
// 3. Put larger elements on the right
// 4. Recursively sort left and right


// Best case

// The pivot divides the array approximately in half: O(n log n)

// Average case
// Usually:
// O(n log n)

// Worst case
// If the pivot is consistently the smallest or largest element:

// n
// |
// n-1
// |
// n-2
// |
// n-3
// O(n²)--For example, if you always choose the last element as pivot and the array is already sorted:
// Space: O(n)

const quickSort=(arr)=>{
    if (arr.length <= 1) {
        return arr;
    }
    // choose pivot element --we choose last element
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    
    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ]
}
console.log(quickSort([7, 2, 1, 6, 8, 5, 3, 4]))
