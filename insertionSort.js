
// 2.insertion sort

// virtually split the array into sorted and unsorted part  
// assume that first element is already sorted and remaining element are unsorted
// Select an unsorted element and compare with all the elements in sorted part 
// if the element is the sorted part is smaller then the selected element ,proceed to the
// next element in the unsorted part.Else shift larger elemements  in the sorted part towards the right
// repeat all the steps till all the unsorted elements in the right order

// O(n^2)
const insertionSort=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let current = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j + 1] = current;
        
    }
    return arr
    
}
console.log(insertionSort([-1,-10,3,2,5,6,7]))

