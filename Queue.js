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
class Queue{
    constructor(){
        // initialize new list using array in js
        this.items=[]
    }
    enqueue(element){
        //add element in end use push method of array
        this.items.push(element)
    }
    dequeue(){
        // remove element from the front of the queue
        // use shift method of array 
        // with shift method this is linea time complexity O(n) so we implement Queue again with Object
        return this.items.shift()//remove element form first position and return that element
    }
    isEmpty(){
        return this.items.length===0
    }
    // peek() return element from the first postion without removing it
    peek(){
        if(!this.isEmpty()){
            return this.items[0]//return element at index 0
        }else{
            return null
        }
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const q1=new Queue()
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
console.log(q1.items)
// dequeue
console.log(q1.dequeue())
console.log(q1.items)
console.log(q1.isEmpty())
console.log(q1.peek())
console.log(q1.size())
q1.print()

// with object 
// both enque and dequeue have constant time complexity O(1)
class Queue{
    constructor(){
        // initialize new list using array in js
        this.items={}
        // initialize 2 pointers for track first and last element 
        // First in first out 
        // [rear][][][][][front]
        this.rear=0
        this.front=0
    }
    enqueue(element){
        this.items[this.rear]=element//add element at 0 key and value is element
        // now we increase rear to add another value at next 1,2,..
        this.rear++;

    }
    dequeue(){
        // remove element from the front of the queue
        // front item is this.items[this.front]//get item by key first item at key 0
        const item=this.items[this.front]
        delete this.items[this.front]
        // now increment the front
        this.front++;//in next iteration the front is at key 1 when key 0 item remove
        return item;
    }
    isEmpty(){
        return this.rear-this.front === 0//if diffrence is 0 then queue is empty
    }
    // peek() return element from the first postion without removing it
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]//return element at key 0 for first time 
        }else{
            return null
        }
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items)
    }
}

const q2=new Queue()
q2.enqueue(1);
q2.enqueue(2);
q2.enqueue(3);
q2.enqueue(4);
console.log(q2.items)
// dequeue
console.log(q2.dequeue())
console.log(q2.items)
console.log(q2.isEmpty())
console.log(q2.peek())
console.log(q2.size())
q2.print()


// circular Queue
// enqueue()-add an element in the queue
// dequeue()-remove the oldest element from the queue and return that element
// isFull()-check if the queue is full
// isEmpty()-check if the queue is empty
// peek()-return the element without remove the  element from the queue  
// print()-visualize the elements in the queue


class circularQueue{
    constructor(size){
        this.items=new Array(size);
        this.size=size;
        this.currentLength=0;//current length of queue
        // -1 means not pointing to any postion in the queue 
        this.rear=-1;
        this.front=-1;
    }
    
    isFull(){
        return this.currentLength===this.size
    }
    isEmpty(){
        return this.currentLength===0;
    }

    enqueue(value){
        if(!this.isFull()){
            // when queue is at index 0 is empty we need to assign new item
            // at index 0 , if size is 5 so without modules operator this goes to index 5 when enqueue but size is fixed so we need to assign at index 0 so we use modules operator
            this.rear=(this.rear+1)%this.size;
            this.items[this.rear]=value
            this.currentLength+=1
            if(this.front===-1){
                this.front=this.rear
            }
        }

    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        // store front item in item variable for return
        const item=this.items[this.front]
        // make postion null at front

        this.items[this.front]=null
        // now increase front counter by 1 because when dequeue 
        // again we need next item
        this.front=(this.front+1)%this.size
        // and decrement the currentLength
        this.currentLength-=1

        // when all elements are dequeue we need to reset pointers for fresh queue for future operation
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    } 

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty')
        }else{
            let i;
            let str='';
            for(i=this.front;i!==this.rear;i=(i+1)%this.size){
                str+=this.items[i]+" "
            }
            str+=this.items[i]
            console.log(str)
        }

    }
}

const q=new circularQueue(5)
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue())
console.log(q.dequeue())
q.enqueue(6)
q.enqueue(7)
q.print()
console.log(q.peek())