// FIFO first in first out
// Queue push [add at last index at head in linkedlist]
// Queue pop[remove at o index at head in linkedlist]

import {LinkedList} from './LinkedList.js'

class LinkedListQueue{
    constructor(){
        this.list=new LinkedList()
    }
    enqueue(value){
        // enqueue at head
        this.list.append(value)
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        // value top of the Queue
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}

const queue=new LinkedListQueue()
console.log("is empty",queue.isEmpty())
console.log("is getSize",queue.getSize())
console.log("is print")
queue.print()
console.log("is enqueue")
queue.enqueue(10)
console.log("is enqueue")
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
console.log("is peek",queue.peek())
console.log("is dequeue",queue.dequeue())
console.log("is dequeue",queue.dequeue())
queue.print()