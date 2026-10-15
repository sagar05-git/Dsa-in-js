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

// types --linked list singly linkedlist and doubly linkedlist


// Hash Table Data Structure in JavaScript
// Hash Table Data Structure in JavaScript
// Hash Table Data Structure in JavaScript

// A hash table stores data as: key → value
// given a key,you can associate a value with that key for the fast lookup

// {
//     name: "Sagar",
//     age: 25,
//     city: "Mohali"
// }

// Key       Value
// ----------------
// name  →   Sagar
// age   →   25
// city  →   Mohali

// Instead of searching every item one by one, a hash table uses a hash function to determine where the value should be stored.


// why we need hash tables
// const users = [
//     { id: 101, name: "A" },
//     { id: 102, name: "B" },
//     { id: 103, name: "C" },
//     { id: 104, name: "D" }
// ];
// Find user id = 104.
// 101 ❌
// 102 ❌
// 103 ❌
// 104 ✅//so time complexity is linear O(n)

// With a hash table: users[104] //constant time complexity O(1)
// 104
//  ↓
// hash function
//  ↓
// index 4
//  ↓
// user

// Map
// Write your own HASH Table implementation is very popular js interview question
// Hash table store key value pairs
// 'in'=>'india',
// 'au'=>'australia'
// 'fr'=>'france'
// 'it'=>'Italy'

// conditions
// we store the key value pairs in a fix sized array
// Array has a numeric index

// How do we go from using a string as an index number as an index?
// A hasing function accepts the string key,converts it into a hash code using a definded
// logic and then mapped it into a numeric index that is within the bounds of the array
// Using the index we store the  value
// [A hash function takes a key and converts it into a number.]

// the same hashing function is reused to retrive the value given a key
// ->set to store a key value pair 
// ->Get to retrive a value given its key
// ->Remove to delete a key value pair

// Hash tables are typically implemented where constant time lookup and insertion are required
// Database indexing
// Caches

// Now Hash table implementaion
// Set to store a key-value pair
// Get to retrive a value given its key
// Remove to delete a key value pair
// Hashing function to convert a string key to a numberic index

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     // A hash function takes a key and converts it into a number.
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         // total value is greater than size of array so we use modulues operator(%)
//         return total%this.size;//The % size ensures that the result fits inside the array.
//         // so reminder is 6 in this case 
//         // this make sure index in between 0 to 9 //not greater than size
//     }

//     set(key,value){
//         // first need to get the index according to key
//         const index=this.hash(key);
//         // now store the value at index in table
//         this.table[index]=value
//     }

//     get(key){
//         // get index for the key first
//         const index=this.hash(key);
//         // then get value accoding to index
//         return this.table[index]
//     }
// // remove the key 
//     remove(key){
//         // get index for the key first
//         const index=this.hash(key);
//         // set undefined in that particular index
//         this.table[index]=undefined
//     }
//     // display the content of hash table
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             // if value exist at the particular index
//             if(this.table[i]){
//                 console.log(i,this.table[i])//display index and value in table
//             }
//         }
//     }
// }

// const h1=new HashTable(10)
// console.log(h1.hash('sagar'))
// h1.set('sagar',10)
// h1.set('sahil',20)
// h1.set('shivam',30)
// // this update the index of shivam so we lost value 30 
// // if key name is same this will update the value for that index 
// h1.set('shivam',40)
// console.log(h1.get('sahil'))
// console.log(h1.get('shivam'))
// h1.remove('sagar')
// console.log(h1.get('sagar'))
// h1.display()

// this update the index of shivam so we lost value 30 
// if key name is same this will update the value for that index 
//now we implement resolve collision on same key not to remove previous value


// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     // A hash function takes a key and converts it into a number.
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         // total value is greater than size of array so we use modulues operator(%)
//         return total%this.size;//The % size ensures that the result fits inside the array.
//         // so reminder is 6 in this case 
//         // this make sure index in between 0 to 9 //not greater than size
//     }

//     set(key,value){
//         // first need to get the index according to key
//         const index=this.hash(key);
//          // check the table have use index with that key 
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]] //set in table index
//         }else{
//             // find sub array with the same key
//             const sameKeyItem=bucket.find(item=>item[0]===key)//this compare key (item[0] which is present key in each sub array[[key,value],[key,value],[key,value],[key,value]])
//             // check if key is present at any of sub arrray at index 0 then we update the value at index 1 of that subarray
//             if(sameKeyItem){
//                 sameKeyItem[1]=value//update value of the same key if exist
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index=this.hash(key);
//         console.log(index,"index")
//         // check the table have use index with that key [store the refrence to the index position ]
//         const bucket=this.table[index];
//         console.log(bucket,"bucckket")
//         if(bucket){
//             const sameKeyItem=bucket.find(item=>item[0]===key)//match excect key because name and mane have same index so we match key
//             if(sameKeyItem){
//                 return sameKeyItem[1]//return value if table have that index of the key exist
//             }
//         }
//         return undefined;
        
//     }
// // remove the key 
//     remove(key){
//          const index=this.hash(key);
//         // check the table have use index with that key [store the refrence to the index position ]
//         const bucket=this.table[index];
//         // if key index is exist then move on next step
//         if(bucket){
//             const sameKeyItem=bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//             //    we use splice method to remove from array from particular index
//             bucket.splice(bucket.indexOf(sameKeyItem),1)//remove 1 item from the index of bucket
//             }
//         }
//     }
//     // display the content of hash table
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             // if value exist at the particular index
//             if(this.table[i]){
//                 console.log(i,this.table[i])//display index and value in table
//             }
//         }
//     }
// }

// const h1=new HashTable(10)//size is 10 so index never be greater than 9 so 0 to 9
// console.log(h1.hash('sagar'))
// h1.set('sagar',10)
// h1.set('sagar',40)
// h1.set('ragas',20)
// h1.set('shivam',30)
// // // this update the index of shivam so we lost value 30 
// // // if key name is same this will update the value for that index 
// // h1.set('shivam',40)
// console.log(h1.get('sagar'))

// console.log(h1.get('shivam'))

// // console.log(h1.get('shivam'))
// // h1.remove('sagar')
// console.log(h1.get('sagar'))
// h1.display()



// Tree
// A Tree is a non-linear data structure where data is organized in a hierarchy.
// linear data structures --array,linkedlist,stacks and queues
// and non linear -tree
// A tree is hierarchical data structure that consists of nodes connected by edges
// tree is non linear in nature so allow quicker and easier access to data

// tree usage
// File system for directory structure
//  A Family tree 
// An Orgainisation tree 
// DOM 
// Chat Bots 
// Abstract syntax trees

// Tree terminology
        //         10
        //       /    \
        //      20     30
        //     /  \   /  \
        //    40   50 60   70
        
// Root-The top node 10
// Parent--10 is the parent of 20 and 30.
// Child-20 and 30 are children of 10.
// Siblings-Nodes with the same parent: 20 and 30
// Leaf-A node with no children: 40, 50, 60, 70
// Edge. Connection between two nodes: 10 → 20
// Depth -Number of edges from the root.
// example
// 10       depth = 0
//  |
// 20       depth = 1
//  |
// 40       depth = 2

// Height--Longest path from a node to a leaf.
// For the above tree:height(10) = 2

// ancetor node --10 is ancetor of node 40
// Path --Path(10,40) is 10-20-40
// distance -number of edges along the shortest path between two nodes. for 10 and 40  Distance(10,40)--is 2
// degree of node -- total number of child nodes which node have Degree(20)-2 (40 and 50 child node)
// degree of a tree is maximum  degree of a node(highest node degree == degree of child)
// Degree of tree is  2 for now maximum child is 2 for any node


//--->>> Binary tree-------
// a binary tree is a tree data structure  in which each node has at most two children[Maximum of two child a node can have]
// They are referred to as left child or right child 

// Binary Search Tree (BST) in JavaScript
// A Binary Search Tree is a binary tree where every node follows this rule:
// LEFT < ROOT < RIGHT

// Example:

//               50
//             /    \
//           30      70
//          /  \    /  \
//        20   40  60   80
// all the left side of node 50 must be less than 50 and for right side all the node value at right is greater then 50


// For node 50:
// Everything on the left is < 50[the value of each left node is less than root node(parent node)]
// Everything on the right is > 50[the value of each right node is greater than root node(parent node)]
// each node has at most two children
// This ordering is what makes searching efficient.

// operation perform on binary search tree
// Insertion- to add a node to the tree
// search-- to find a node given its value
// DFS and BFS--TO visit all the nodes in the tree
// Deletion- To remove a node given its value

// Binary search usages--
// Searching
// Sorting  To implement absract data types such as lookup tables and priority queue

// binary search Binary Search Tree (BST) implementation
// this creates same object as constructor
// function Node(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }
// const node = new Node(10);

// console.log(node);
// {
//     value: 10,
//     left: null,
//     right: null
// }

// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null
//     }
// }
// class BinnarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     IsEmpty(){
//         return this.root===null
//     }
//     insertion(value){
//     //    create new node 
//     const newNode=new Node(value)

//     // check tree is empty or not
//     if(this.IsEmpty()){
//         this.root=newNode
//     }else{
//         // do recursion by using this method
//         this.insertNode(this.root,newNode)//this.root call the root of sub-tree in each recursive call
//     }

//     }
//     // root node and newNode
//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 // left already have value add the value in that left node
//                 // recursively call root node by passing left child as new root and new node
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     // search method to check is given value is exist in the tree
//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(value<root.value){
//                 //search in left
//                 return this.search(root.left,value)
//             }else{
//                 // search in right if value is greater than root.value
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     // tree transversal-visiting every node in a tree
//     // A Hierarchical data structure like a tree can be traversed in diffrent ways
//     // 1. Depth First Search(DFS)
//     // 2. Breadth First Search(BFS)

//     // 1. Depth First Search(DFS)--The DFS algorithm starts at the root node and explores as far as
//     // possible along each branch before backtracking
//     // Visit the root node,visit all the nodes in the left subtree and vist all the node in right subtree
//     // Depending on the order in which we do this,
//     // there can be three types of DFS traversals--
//     // 1. PreOrder
//     // 2. InOrder
//     // 3. Postorder

//     // 1--PreOrder Traversal
//         // 1.Read the data of the node
//         // 2.Visit the left subtree
//         // 3.Visit the right subtree
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             // use recursion
//             // go left first
//             this.preOrder(root.left)
//             // then right
//             this.preOrder(root.right)
//         }
//     }

//      // ---2. InOrder
//     //  Visit left subtree
//     // read the data of the node
//     // visit the right subtree

//     inOrder(root){
//         if(root){
//             //  Visit left subtree
//             this.inOrder(root.left)
//             // now read the node value
//             console.log(root.value)
//             // visit the right subtree
//             this.inOrder(root.right)
//         }
//     }

//     // 3. Postorder
//     //  Visit left subtree
//     // visit the right subtree
//     // read the data of the node

    
//     postOrder(root){
//         if(root){
//             //  Visit left subtree
//             this.inOrder(root.left)
//             // visit the right subtree
//             this.inOrder(root.right)
//             // now read the node value
//             console.log(root.value)
//         }
//     }

//     // 2. Breadth First Search(BFS)
//     // Explore all the nodes at the present depth prior to moving on the nodes at the next depth level
//     // start from root check on left side depth 1 and then right side depth 1 and so on

//     // BFS Tranersal Approach
//     // 1.Create a queue
//     // 2.Enqueue the root node
//     // 3. As long as node exists in the queue
//     // a. Dequeue the node from the front 
//     // b. read the node's value 
//     // c.Enqueue the node's left child if it exists 
//     // d.Enqueue the node's right child if it exists
//     //               50
//     //             /    \
//     //           30      70
//     //          /  \    /  \
//     //        20   40  60   80

//     // step 1 Create a queue and enqueue the root node
//     // [50]//node exists
//     // read this queue
//     // 50
//     // enqueue left and right
//     // [30 ,70]
//     // Dequeue if queue is not empty
//     // dequeue--30
//     // enqueue again and repeat the process
//     // [70,20,40]
//     // dequeue-70
//     // enque left and right again
//     // [20,40,60,80]
//     // dequeue from front and read the value
//     // 50 30 70 20 40 60 80
//     // when queue is empty then every node read


//     levelOrder(){
//         // use the optimized queue implementation
//         const queue=[]
//         queue.push(this.root);
//         while(queue.length){
//             // dequeue from front using shift
//             let cur=queue.shift()
//             // print node value to console
//             console.log(cur.value)
//             if(cur.left){
//                 queue.push(cur.left)
//             }
//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }

//     }

//     // find minumum and the maximum value in the binnay search tree
//     //  we know that the left leaf node is the smallest value and 
//     // right most leaf is the maximum in binnary tree we already know this 
//     // example
//     //               50
//     //             /    \
//     //           30      70
//     //          /  \    /  \
//     //        20   40  60   80
//     // left most and minimum node value is 20 and right most leaf 80 is the maximum value

//     // minimum
//     min(root){
//         if(!root.left){
//             return root.value 
//             //if left root is not present then we 
//             // return root node value as minimum
//         }else{
//             // then we recursively go to the left child node 
//             return this.min(root.left)
//         }
//     }

//     // maximum
//         max(root){
//         if(!root.right){
//             return root.value //return the current root value 
//             //if right root is not present then we 
//             // return root node value as minimum
//         }else{
//             // then we recursively go to the right leaf child node to get minimum
//             return this.max(root.right)
//         }
//     }

//     // Delete //Binary tree delete method
//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }
//         if(value<root.value){
//             // if value is small than root value then check in left
//             root.left=this.deleteNode(root.left,value)
//         }
//         if(value>root.value){
//             // if value is small than root value then check in left
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
    
//     }




//     // print(){
//     //     console.log(this.root,"rooot")
//     // }
    
// }


// const bst=new BinnarySearchTree()
// // so root set as 10 

// console.log(bst.IsEmpty())

// bst.insertion(100)
// bst.insertion(90)
// bst.insertion(110)
// bst.insertion(80)
// bst.insertion(70)
// bst.insertion(105)
// bst.insertion(120)
// console.log(bst.search(bst.root,80))
// console.log(bst.search(bst.root,800))
// // transversing
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // console.log('------console postOrder')
// // bst.postOrder(bst.root)

// // console.log('level order ... BFS approach')
// // bst.levelOrder()

// // minimum and maximum in tree node value
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// // bst.print()


// Graph
// Graph in DSA
// A graph is non linear data structure that consists of a finite number of vertices (also called node) connected by edges.
// Trees are the specify type of graph data structures

// Vertices (Nodes) + Edges (Connections)
// Vertices = A, B, C, D, E
// Edges =
// A-B
// A-C
// B-D
// C-E
// D-E

    //   A
    //  / \
    // B   C
    // |   |
    // D---E
    

// A Graph is a data structure used to represent relationships between objects.

// For example:

// People connected to people → Social network
// Cities connected by roads → Maps
// Computers connected in a network → Computer network
// Web pages connected by links → Internet
// Courses connected by prerequisites → Course system


// 1. Graph Terminology

//---> Vertex / Node
// A point in the graph.
// A is a vertex.

//---> Edge
// Connection between two vertices.{A -------- B} --  A-B is an edge.

//---> Adjacent Nodes
// Two nodes connected directly.  ---   A ---- B //A and B are adjacent.

// ---> Degree--Number of edges connected to a node

//       B
//       |
// A --- C --- D
//       |
//       E

// in this example degree of C is 4 because C is connected to A, B, D and E.

// -----------------Types of Graphs--------------------
// 1 Directed graph--Edges have a direction. Edges are usually represented by 
// arrows pointing in the direction the graph can be traversed
// A ------> B
// This means:A → B
// but not necessarily:
// B → A

//   B
//  / \
// A   C//need to add arrow A to B to C no option to add arrow 
// A->B->C
// we can't traversed c to b to a we have to traversed A->B->C

// 2.Undirected graph--Connection works both ways. Edges are bidirectional.the graph can be traversed 
// in either direction.the absence of arrow tell us that the graph is undirected
//   B
//  / \
// A   C
// A to B to C or C to B to A  // A->B->C. // C->B->A

//---------- Weighted Graph---------
// Edges have a value/cost.
// A ----10---- B
// |            |
// 5            20
// |            |
// C ----15---- D

// The numbers could represent:
// Distance
// Cost
// Time
// Network latency

// For example:
// Delhi ---- 500km ---- Chandigarh

// ---------Unweighted Graph---------
// Edges don't have weights.
// A ----- B
// |       |
// C ----- D
// Every connection is simply an edge.

// ----------Cyclic Graph---------
// A graph containing a cycle.
// A ---- B
// |      |
// |      |
// D ---- C
// You can travel:  A → B → C → D → A. That's a cycle.

// Usage of graph in socail media to show suggestion of friends and show mutual friends


// ---------Graph vs Tree--------
// A tree is actually a special type of graph.

//     A
//    / \
//   B   C
//  / \
// D   E

// Usually:
// No cycles
// Connected
// Has n - 1 edges for n vertices(nodes)
// Has a hierarchical structure


// -------Graph--------
// A ---- B
// |    / |
// |   /  |
// C ---- D

// Graphs can have:

// Cycles
// Multiple paths
// Directed edges
// Undirected edges
// Different edge weights



// ---------------Graph Representation in JavaScript-----------

// There are two major ways you should learn.

// Method 1: Adjacency Matrix

// 2D array of size V*V where V is the number of vertices in the graph
// each row and column represent vertex
// if the value of any element say,marix[i][j] is 1,it represents that there is an edge
// connecting vertex i and vertex j

// 0 not connected and 1 connected 

// Suppose we have this graph:
//     A
//    / \
//   B   C

// Connections are:
// A → B
// A → C
// Because this is an undirected graph, the reverse connections also exist:

// 1. Represent nodes as indexes
// We'll assign:
// A = 0 //0 index
// B = 1 //at 1 index
// C = 2 //at 2 index

// Then create a matrix:

// const graph = [
//     [0, 1, 1],
//     [1, 0, 0],
//     [1, 0, 0]
// ];

// this is a way to visulize a graph in matix of array

// Visualize it:
//        A  B  C
//     A  0  1  1
//     B  1  0  0
//     C  1  0  0

// we get value of row at that rows  column(jis bhi row ko use kra ga uska column ko check kra ga to get value at row k column ki value)
// The meaning is:
// graph[0][0] = 0//(means value at  first row and  first column)
// graph[0][1] = 1//(means value at first row and second column). From A → To B
// graph[0][2] = 1//(means value at first row and third column) From A → To C
// graph[1][0]=1. //From B → To A
// graph[1][1]=0//From B → To B so this is 0 no B to B connection 
// graph[1][2]=0
// graph[2][0]=1 //From C → To A
// graph[2][1]=0
// graph[2][2]=0
// A → A = no connection
// A → B = connection
// A → C = connection

// graph[row][column]--From row → To column

// Why 0 and 1?

// We usually use:
// 0 = no edge
// 1 = edge exists


// Method 2: Adjacency List (This is actually more commonly used in DSA/interviews because it uses less memory for most graphs.)
// vertices are stored in a map like data structure,and every vertex stores a list of its adjcent vertices

// Suppose we have this graph:
//     A
//    / \
//   B   C

// const graph={
//     'B':['A'],
//     'A':['B','C'],
//     'C':['B']
// }
// in this we store 
// Instead of storing every possible connection, 
// we store only the nodes that are actually connected.
// With  adjcency list ,inserting ,finding nodes is constant time complexity
// whereas adjcency matrix,it is linear time complexity
// An adjacency list allows you to store additional values with n edge such as weight of the edge.
// so such information would have to store externally
// const graph = [
//     [1, 2], // A → B, C [ A → B, A → C]
//     [0],    // B → A [ B → A]
//     [0]     // C → A  [ C → A]
// ];

// Think of it like:
// Node     Neighbors
// A (0) →  B (1), C (2)
// B (1) →  A (0)
// C (2) →  A (0)

