// fibonacci sequence
// function  fibonacci(n) {
//     let a=0;
//     let b=1;
//     for(let i=0;i<n;i++){
//         console.log(a);
//         const next=a+b;
//         a=b;
//         b=next;
//     }
// }
// fibonacci(7)

// function  fibonacci(n) {
//     let fib=[0,1];
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(7))
// 1 for loop time complexity -- Big O(n) linear
// calculation is not dependend on input size O(1) constant
// 1 loop - O(n) linear
// 2 loops O(n^2) quadratic
// input size reduce by half -- O(logn)

// // using recursion
// function  fibonacci(n) {
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// // console.log(fibonacci(6))
// console.log(fibonacci(7))


// factorial
// O(n)
// function fact(n){
//     let result=1;
//     for(let i=1;i<=n;i++){
//         result*=i
//     }
//     return result
// }
// console.log(fact(6))
// function fact(n){
//     if(n<=0|| n===1){
//         return 1;
//     }
//     return n*fact(n-1)
// }
// console.log(fact(5))

// check prime or not --number which is divided by only by self is prime(means number greater than 1 and that is not the product of two natural number)
// O(n)
// const isPrime=(n)=>{
//     if(n<2) return false;
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return true
//         }
//     }
//     return true
// }
// console.log(isPrime(1))

// O(sqrt(n))
// const isPrime=(n)=>{
//     if(n<2) return false;
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return true
//         }
//     }
//     return true
// }
// console.log(isPrime(1))


// power of two
// we reduce our input by half and have one loop so time complexity O(logn) and space O(1)

// const isPowerOfTwo=(n)=>{
//     if(n<1) return false;
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(isPowerOfTwo(32))

// fibonacci sequence using recursion print nth number 
// const fibonacci=(n)=>{
//     // if(n===0) return 0;
//     // if(n===1) return 1;
//     if(n<2) return n
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(6))

// const fibonacci=(n)=>{
//     let fib=[0,1]
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(6))

// O(n) --
// const fact=(n)=>{
//     if(n===0 || n===1) return 1;
//     return n*fact(n-1)
// }
// console.log(fact(5))
// const fact=(n)=>{
//     let fact=1
//     for(let i=1;i<=n;i++){
//         fact*=i
//     }
//     return fact
// }
// console.log(fact(5))

// linear search linear search linear search linear search

// find index of element in the array

// O(n)
// const index=(arr,n)=>{
//    return arr.indexOf(n)
// }
// console.log(index([1,2,3,4,5,6],7))

// O(n)
// const index=(arr,n)=>{
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]===n) {
//         return i
//     }
//    }
//    return -1
// }
// console.log(index([1,2,3,4,5,6],10))


// binary search binary search binary search binary search--binary search only works on sorted array
// if array is empty ,return -1 as the element cannot be found
// if array has elements find the middle element and if matches retun that element index
// if target is less than middle element ,so element is in left half
// if target is greater than middle element ,so element is in right half


// O(logn)
// const binnarySearch=(arr,n)=>{
//     let leftIndex=0
//     let rightIndex=arr.length-1
// // repet until array is not empty
//     while(leftIndex<=rightIndex){
//         let middleindex=Math.floor((leftIndex+rightIndex)/2)//get lower index if even number of item present
//         // console.log(middleindex,"middleindex")
//         // check target is equal to middle element
//         if(n===arr[middleindex]) return middleindex;
//         // if target item value is less then middleIndex item so we presue left half else right half
//         if(n<arr[middleindex]){
//             rightIndex=middleindex-1;//change right index 
//             // console.log(rightIndex,"rightIndex")
//         }else{
//             leftIndex=middleindex+1;//change left index 
//             // console.log(leftIndex,"leftIndex")
//         }

//     }
//     return -1
// }
// console.log(binnarySearch([1,2,3,4,5,6,7,8,9,10],14))

// O(logn)
// const recursiveBinnarySearch=(arr,target)=>{
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex) return -1;//not found
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2)//lower index
//     if(target === arr[middleIndex]){
//         return middleIndex;
//     }
//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }
//     if(target>arr[middleIndex]){
//         return search(arr,target,middleIndex+1,rightIndex)
//     }

// }
// console.log(recursiveBinnarySearch([1,2,3,4,5,6,7,8,9,10],14))
// console.log(recursiveBinnarySearch([1,2,3,4,5,6,7,8,9,10],8))
// console.log(recursiveBinnarySearch([1,2,3,4,5,6,7,8,9,10],9))


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
// const bubbleSort=(arr)=>{
//     let temp;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             // // ascending order 
//             // if(arr[i]>arr[j]){
//             //     temp=arr[i]
//             //     arr[i]=arr[j]
//             //     arr[j]=temp
//             // }
//             // descending order 
//             if(arr[i]<arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([-1,-10,3,2,5,6,7]))


// 2.insertion sort

// virtually split the array into sorted and unsorted part  
// assume that first element is already sorted and remaining element are unsorted
// Select an unsorted element and compare with all the elements in sorted part 
// if the element is the sorted part is smaller then the selected element ,proceed to the
// next element in the unsorted part.Else shift larger elemements  in the sorted part towards the right
// repeat all the steps till all the unsorted elements in the right order

// O(n^2)
// const insertionSort=(arr)=>{
//     for(let i=1;i<arr.length;i++){
//         let current = arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j + 1] = current;
        
//     }
//     return arr
    
// }
// console.log(insertionSort([-1,-10,3,2,5,6,7]))



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

// const quickSort=(arr)=>{
//     if (arr.length <= 1) {
//         return arr;
//     }
//     // choose pivot element --we choose last element
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
    
//     return [
//         ...quickSort(left),
//         pivot,
//         ...quickSort(right)
//     ]
// }
// console.log(quickSort([7, 2, 1, 6, 8, 5, 3, 4]))


// merge sort
// Merge Sort is a Divide and Conquer sorting algorithm.
// Divide → Sort → Merge
// divide the array into subarray ,each array contain only one element(an array with one element is sorted already)
// repeatedly merge the sub arrays to produce new sorted sub arrays,until there is only
// one subarray remaining.that will be the sorted array.

// time complexity O(nlogn)//half and one loop

// const mergeSort=(arr)=>{
//     if(arr.length<=1){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)//middle index if even select 
//     //now divide
//     let left=arr.slice(0,middle);//not include middle in left array
//     let right=arr.slice(middle,arr.length)//include all the element or we also write let right=arr.slice(middle)
    
//     // recursivly sort both halves
//     const sortedLeft=mergeSort(left)
//     const sortedRight=mergeSort(right)
//     return merge(sortedLeft,sortedRight)

// }
// const merge=(leftArr,rightArr)=>{
//     console.log(leftArr,rightArr,"leftArr and rightArr")
//     const sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         // check for 0 index
//         if(leftArr[0]<=rightArr[0]){
//             // sortedArr.push(leftArr[0]);
//             sortedArr.push(leftArr.shift());//we use shift here this also remove element from left array 
//         }else{
//             // sortedArr.push(rightArr[0]);
//             sortedArr.push(rightArr.shift());
//         }
//         console.log(sortedArr,"sortedArr count")
//     }
    
//     return [...sortedArr,...leftArr,...rightArr];//if elements are left in the leftArr and rightArr
// }
// console.log(mergeSort([7, 2, 1, 6, 8, 5, 3, 4]))


// cartesian product
// time complexity O(nm)
// const A=[1,2]
// const B=[3,4,5]
// // result A X B --[[1,3],[1,4],[2,3],[2,4]]

// const cartesian=(a,b)=>{
//     let res=[]
//     for(let i=0;i<a.length;i++){
//         for (let j=0;j<b.length;j++){
//             res.push([a[i],b[j]])
//         }
//     }
//     return res
// }
// console.log(cartesian(A,B))

// climbing staircase problem
// given the staircase of 'n' steps ,count the number of distinct ways to climb to the top
// you can either climb 1 step or 2 step at a time

// n(1)--1 ways step so one step to climb -1 way to climb
// n(2)--2 ways steps so two steps to climb (1 step one by one (1,1)) or 2 steps at a time(2)--2 ways to climb
// n(3)--3 ways steps so 3 stps one by one(1,1,1),(1,2)-1 step then 2 steps ,or (2,1)- two steps at once then 1 step 3ways to climb
// n(4)--5 ways to climb(1,1,1,1),(1,1,2),(1,2,1),(2,1,1),(2,2)
// O(n)
// if we want to climb n steps but we can only climb n-1 and n-2 steps means if 10 steps
// we want to climb at once we can climb n-1-9 step lefts step or n-2-8 steps left step  
// const climbingStaircase=(n)=>{
//     let noOfWays=[1,2]
//     for(let i=2;i<=n;i++){
//         noOfWays[i]=noOfWays[i-1]+noOfWays[i-2]
//     }
//     return noOfWays[n-1]
// }
// console.log(climbingStaircase(5))


// Stack  LIFO-last in first out
// | Operation |           Time |
// | --------- | -------------: |
// | Push      | O(1) amortized |
// | Pop       |           O(1) |
// | Peek      |           O(1) |
// | Is Empty  |           O(1) |

// Space: O(n)//because the stack can contain n elements.

// class Stack {

//     constructor() {
//         this.items = [];
//     }
// // Add an element to the top.
//     push(value) {
//         this.items.push(value);
//     }
// // Remove the top element.
//     pop() {
//         return this.items.pop();
//     }
//     // peek() / top()
// // Look at the top element without removing it.
//     peek() {
//         return this.items[this.items.length - 1];
//     }
// // Checks whether the stack has no elements.
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek());   // 30
// console.log(stack.pop());    // 30
// console.log(stack.peek());   // 20
// console.log(stack.size());   // 2


// Queue

// A Queue is a linear data structure that follows:
// FIFO — First In, First Out
// The element that enters first is removed first.

// enqueue()
// Adds an element to the rear/end.
// dequeue()
// Removes an element from the front.
// peek()
// Returns the front element without removing it.
// isEmpty()
// Checks whether the queue is empty.

// FIFO
// Implement with array
// in this enqueue and dequeue does not have same time complexity so we implement this using Object
// class Queue{
//     constructor(){
//         // initialize new list using array in js
//         this.items=[]
//     }
//     enqueue(element){
//         //add element in end use push method of array
//         this.items.push(element)
//     }
//     dequeue(){
//         // remove element from the front of the queue
//         // use shift method of array 
//         // with shift method this is linea time complexity O(n) so we implement Queue again with Object
//         return this.items.shift()//remove element form first position and return that element
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     // peek() return element from the first postion without removing it
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]//return element at index 0
//         }else{
//             return null
//         }
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }

// const q1=new Queue()
// q1.enqueue(1);
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(4);
// console.log(q1.items)
// // dequeue
// console.log(q1.dequeue())
// console.log(q1.items)
// console.log(q1.isEmpty())
// console.log(q1.peek())
// console.log(q1.size())
// q1.print()

// with object 
// both enque and dequeue have constant time complexity O(1)
// class Queue{
//     constructor(){
//         // initialize new list using array in js
//         this.items={}
//         // initialize 2 pointers for track first and last element 
//         // First in first out 
//         // [rear][][][][][front]
//         this.rear=0
//         this.front=0
//     }
//     enqueue(element){
//         this.items[this.rear]=element//add element at 0 key and value is element
//         // now we increase rear to add another value at next 1,2,..
//         this.rear++;

//     }
//     dequeue(){
//         // remove element from the front of the queue
//         // front item is this.items[this.front]//get item by key first item at key 0
//         const item=this.items[this.front]
//         delete this.items[this.front]
//         // now increment the front
//         this.front++;//in next iteration the front is at key 1 when key 0 item remove
//         return item;
//     }
//     isEmpty(){
//         return this.rear-this.front === 0//if diffrence is 0 then queue is empty
//     }
//     // peek() return element from the first postion without removing it
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]//return element at key 0 for first time 
//         }else{
//             return null
//         }
//     }
//     size(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.items)
//     }
// }

// const q1=new Queue()
// q1.enqueue(1);
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(4);
// console.log(q1.items)
// // dequeue
// console.log(q1.dequeue())
// console.log(q1.items)
// console.log(q1.isEmpty())
// console.log(q1.peek())
// console.log(q1.size())
// q1.print()


// circular Queue
// enqueue()-add an element in the queue
// dequeue()-remove the oldest element from the queue and return that element
// isFull()-check if the queue is full
// isEmpty()-check if the queue is empty
// peek()-return the element without remove the  element from the queue  
// print()-visualize the elements in the queue


// class circularQueue{
//     constructor(size){
//         this.items=new Array(size);
//         this.size=size;
//         this.currentLength=0;//current length of queue
//         // -1 means not pointing to any postion in the queue 
//         this.rear=-1;
//         this.front=-1;
//     }
    
//     isFull(){
//         return this.currentLength===this.size
//     }
//     isEmpty(){
//         return this.currentLength===0;
//     }

//     enqueue(value){
//         if(!this.isFull()){
//             // when queue is at index 0 is empty we need to assign new item
//             // at index 0 , if size is 5 so without modules operator this goes to index 5 when enqueue but size is fixed so we need to assign at index 0 so we use modules operator
//             this.rear=(this.rear+1)%this.size;
//             this.items[this.rear]=value
//             this.currentLength+=1
//             if(this.front===-1){
//                 this.front=this.rear
//             }
//         }

//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         // store front item in item variable for return
//         const item=this.items[this.front]
//         // make postion null at front

//         this.items[this.front]=null
//         // now increase front counter by 1 because when dequeue 
//         // again we need next item
//         this.front=(this.front+1)%this.size
//         // and decrement the currentLength
//         this.currentLength-=1

//         // when all elements are dequeue we need to reset pointers for fresh queue for future operation
//         if(this.isEmpty()){
//             this.front = -1
//             this.rear = -1
//         }
//         return item;
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]
//         }
//         return null
//     } 

//     print(){
//         if(this.isEmpty()){
//             console.log('Queue is Empty')
//         }else{
//             let i;
//             let str='';
//             for(i=this.front;i!==this.rear;i=(i+1)%this.size){
//                 str+=this.items[i]+" "
//             }
//             str+=this.items[i]
//             console.log(str)
//         }

//     }
// }

// const q=new circularQueue(5)
// console.log(q.isEmpty())
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)
// console.log(q.dequeue())
// console.log(q.dequeue())
// q.enqueue(6)
// q.enqueue(7)
// q.print()
// console.log(q.peek())



// Linked List
// a linear data structure that includes a series of connected nodes
// each node consist of data value and a pointer that points to the next node
// A Linked List is a data structure where elements are stored in separate objects 
// called nodes, and each node points to the next node.


// the list elements can be easily inserted or removed without reallocation or reorginization
// of the entire structure
// random access of element is not feaible and accessing an element has linear time complexity

// Main operations
// Insertion-to add an element at the beginning,end or at a given index in the list
// Deletion-to remove an item given its index value
// search-to find the element and given its value

// All application of stacks and queues are application of linked list 

// The head is the first node in the linked list.

// head
//  ↓
// [10] → [20] → [30] → null


// head
//  ↓
// 10 → 20 → 30 → null
//      ↓
//    next

// Linked list class and Node class
// Node class

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }

// // LinkedList class
// class LinkedList{
//     constructor(){
//         this.head=null//The head is the first node in the linked list.
//         //we need to maintain this pointer ,when list is empty there is no first node to point that so the head is point to null
//         this.size=0;// to track the number of nodes in the list ,when we add/remove  node we manage increment and decrement of size
//     }

//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size;//number of nodes in linkedlist
//     }
// // to add nodes in linked list  steps
// // prepend()
// // 1. create new node that will added to the list and that node will contain the value and a pointer pointing to the null
// // 2. handle scenerio in which List might be empty to begin with ,
// // If list is empty we have to make the head point at the newly created node
// // head pointer should always point at the first node in the list,by pointing head to the newly
// // created node we have effectively prepended our node to the empty list
// // add head
// // O(1)
//     prepend(value){
//         // step 1
//         const node=new Node(value)
//         // step2
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             // when we prepend 
//             // before
//             // head
//             //  ↓
//             // [10] → [20] → [30] → null
//             // we prepend 5 now head at 5
//             // const node=new Node(5)
//             // new node=5
//             // head
//             //  ↓
//             // [5] → [10] → [20] → [30] → null

//             // newNode
//             // ↓
//             // [5] → null

//             // head
//             // ↓
//             // 10 → 20 → 30 → null

//             // Then:
//             // newNode.next = this.head;

//             // Now:
//             // newNode
//             //     ↓
//             //     [5] ─────→ [10] → [20] → [30] → null
//             //                 ↑
//             //                 head

//             // Finally:
//             // this.head = newNode;
//             // head
//             // ↓
//             // 5 → 10 → 20 → 30 → null
//             // connect newly added node to the existing list
//             // put previous head item into new node next 
//             // old node
//             // head is at 10
//             //Node {
//             //   value: 10,
//             //   next: Node { value: 20, next: Node { value: 30, next: null } }
//             // }
//             // put old node in "next" of new Node [this.head contain complete old node now put in next of new node node.next=this.head ]
//             // this one is new node
//             //Node {
//             //   value: 5,
//             //   next: Node { value: 10, next: Node { value: 20, next: null } }
//             // }
//             node.next=this.head
//             // now in head put new node
//             // now in head we put our new node where head is at 5
//             this.head=node
//         }
//         this.size++

//     }

//     // print linkedlist
//     print(){
//         if(this.isEmpty()){
//             console.log(`list is empty`)
//         }else{
//             let current=this.head; //current node point the head of list
//             let listValue='' 
//             // run unitle current node is not null
//             while(current){
//                 // console.log(current)
//                 listValue += `${current.value} ` ;
//                 current = current.next
//             }
//             console.log(listValue,"listValue")
//         }
//     }

//     // Linkedlist append empty list
//     // add node in end of list
//     // O(n)
//     append(value){
//         let prev=this.head;//previous element [last element of list] 
//         // step 1 create new node added to the list which is pointing at null
//         const node=new Node(value)
//         // step2 if empty then point to node to head(head point first pointer in the list)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             // if previous element .next is not null
//             // run until next is not null get last item of linked list then 
//             // in (last element node).next=newNode (assign new node )
//             while(prev.next){
//                 prev=prev.next
//             }
            
//             prev.next=node
//         }
//         this.size++

//     }

//     // Insert new node at the given index in the list 
// //accept value of new node and index
//     insert(value,index){
//         // index must be greater or equal to 0 and not greater than size
//         if(index<0 || index>=this.size){
//             return
//         }
//         // if index is 0 insert node in first node
//         if(index===0){
//             // direclty use prepend method
//             this.prepend(value)
//             return
//         }
//         if(index>0){
//             const node=new Node(value)
//             let i=0
//             let prev=this.head;
//             //use i<index-1 Because we need to reach the node immediately before the insertion position.
//             //want  reach the node  previous to the index
//             while(i<index-1){
//                 prev=prev.next
//                 i++;
//             }//loop stop at previous node
//             // in prev only hold the node before 2 index if index is 5 hold node of 3 then in 3 node next have 4 index data  for put the new node data with prev data
//             // put all the data of previous node into new node next
//             //Node {
//             //   value: value,
//             //   next: Node { value: 20, next: Node { value: 30, next: null } }
//             // }
//             //Node {
//             //   value: value,
//             //   next: prev.next
//             // }
//             node.next=prev.next;//now hold prev node data under next of   "node.next"   for save in new node
//             prev.next=node//now in prev node next put new node with all the data
//             //Node {
//             //   value: value,
//             //   next: prev.next
//             // }
//             // now increase the size of list
//             this.size++
//         }
//     }

//     // removal at given index
//     removeFrom(index){
//         if(index<0 || index>=this.size){
//             return
//         }
       
//         let removeNode;
//         if(index===0){
//             // remove item from head 
//             // hold the refrence of head at 0 in removeNode
//             removeNode=this.head;
//             // add next item into head if next is null then head is null list is empty
//             this.head=this.head.next;
//             this.size--
//             // now return removed Node value
//             return removeNode.value
//         }


//         // If index is greater than 0
//         if (index>0 && index<this.size){
//             // let i=0;
//             // let current=this.head;//head
//             // let prev;
//             // while(i<index){
//             //     prev=current
//             //     current=prev.next
//             //     i++;
//             // }

//             // // in prev we got item item of prev index or in current we got data of next index 
//             // // so in prev.next we assign current.next this remove the node at index
//             // prev.next=current.next
//             // removeNode=current.value;//remove node is current.value
//             // // decrease size
//             // this.size--
//             // // and now we return removeNode
//             // return removeNode
//             let prev=this.head;
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             // so we got previous
//             removeNode=prev.next;
//             prev.next=removeNode.next;
//             this.size--
//             return removeNode.value
//         }
//     }

//     // remove value from linkedlist
//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         console.log(value,"valuueueueue")
//         // if value in head node
//         if(this.head.value===value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }else{
//             // if value is  present in the list or not in the head(starting of list) or note in the list at all
//             let prev=this.head
//             // run until next is not null and prev.next -next value is not same as value
//             while(prev.next && prev.next.value!==value){
//                 prev=prev.next
//             }
//             // get previous 
//             if(prev.next){
//                 let removeNode=prev.next;
//                 // store node in  removeNode and next of removeNode save in prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null

//         }
//     }
//     // Linked list search
//     search(value){
//         let index=0;
//         // when list is empty
//         if(this.isEmpty()){
//             return -1;
//         }
//         let prev=this.head;
//         // when previous is exist and until not equal to null then this loop runs and when it null then it exist loop and return -1 and else return index
//         while(prev){
//             if(prev.value===value){
//                 return index;
//             }
//             prev=prev.next;
//             index++;
//         }
//         return -1
//     }

//     // reverse a linked list
//     reverse(){
//         let prev=null;
//         let current=this.head;
//         while(current){
//             // while current is not null loop until
//             // step 1 save current.next into next
//             let next=current.next;
//             // step2 now in current.next hold previous which is null for 1st iteration
//             current.next=prev

//             // step3 
//             prev=current
            
//             // step 4 assign current into next  now  and run loop until reach null
//             current=nex
//         }
//         // set head to the new 
//         //  console.log(this.head,"thishead11",prev)
//         this.head=prev //now head point at first item 
//         // console.log(this.head,"thishead",prev)
        
//     }
// }

// const list =new LinkedList()
// console.log(`list is empty ${list.isEmpty()}`)
// console.log(`Size of list is  ${list.getSize()}`)

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(5)
// console.log("prepend......................")
// list.print()
// console.log("append......................")
// list.append(40)
// list.append(50)
// list.append(60)
// list.print()
// console.log("insert......................")
// list.insert(2,5)
// list.insert(21,3)
// list.insert(231,6)
// console.log("remove from......................")
// // console.log(list.removeFrom(2),"-----removed value from linked list")
// // list.print()
// console.log("remove by value ......................")
// console.log(list.removeValue(40),"-----removed by value from linked list")//remove 20
// list.print()
// // console.log(list)
// console.log(`-------- search-----`)
// console.log("searching ends at ----",list.search(20)===-1?'not found':list.search(20))

// console.log(`reverse---`)
// list.reverse()
// console.log(`list is empty ${list.isEmpty()}`)
// console.log(`Size of list is  ${list.getSize()}`)
// list.print()


// // Linked list with head and tail

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }

// // LinkedList class
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0;
//        }

//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size;
//     }

//     // print linkedlist
//     print(){
//         if(this.isEmpty()){
//             console.log(`list is empty`)
//         }else{
//             let current=this.head; //current node point the head of list
//             let listValue='' 
//             // run unitle current node is not null
//             while(current){
//                 listValue += `${current.value} ` ;
//                 current = current.next
//             }
//             console.log(listValue,"listValue")
//         }
//     }

//     // prepend()
//     prepend(value){
//         const node=new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

 
//     append(value){
//         const node=new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node
//         }else{
//             this.tail.next=node//add new node in next of tail 
//             this.tail=node//now set tail is new node
//         }
//         this.size++
      
//     }
//     removeFromFront(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             let removeNode=this.head
//             if(this.size>1){
//             this.head=removeNode.next;//make head next value
//             }else{
//                 this.head=null
//             }
//             this.size--
//             return removeNode.value;
//         }

//     }

//     removeFromEnd(){
//         let removedNode=this.tail.value
//         if(this.isEmpty()){
//             return null
//         }else{
//             if(this.size>1){
//                 let prev=this.head;
//                 // run until 
//                 while(prev.next!==this.tail){
//                     prev=prev.next
//                 }
//                 prev.next=null;
//                 this.tail=prev;
//             }else{
//                 this.head=null;
//                 this.tail=null;
//             }
//             this.size--
//             return removedNode;//removed node
//         }
//     }

// }


// const list =new LinkedList()
// console.log(`list is empty ${list.isEmpty()}`)
// console.log(`Size of list is  ${list.getSize()}`)

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(5)
// console.log("prepend......................")
// list.print()
// console.log(`Size of list is  ${list.getSize()}`)
// console.log("append......................")
// list.append(40)
// list.append(50)
// list.append(60)
// list.print()

// console.log("remove from......................")

// console.log(list.removeFromFront())
// list.print()

// console.log(list.removeFromEnd(),"remooveee end")
// list.print()
// console.log(`list is empty ${list.isEmpty()}`)
// console.log(`Size of list is  ${list.getSize()}`)
// list.print()

