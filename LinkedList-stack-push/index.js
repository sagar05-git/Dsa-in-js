// lifo last in first out
// stack push [add at o index at head in linkedlist]
// stack pop[remove at o index at head in linkedlist]

import {LinkedList} from './LinkedList.js'

class LinkedListStack{
    constructor(){
        this.list=new LinkedList()
    }
    push(value){
        // push at head
        this.list.prepend(value)
    }
    pop(){
        return this.list.removeFromFront()
    }
    peek(){
        // value top of the stack
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

const stack=new LinkedListStack()
console.log("is empty",stack.isEmpty())
console.log("is getSize",stack.getSize())
console.log("is print")
stack.print()
console.log("is push")
stack.push(10)
console.log("is push")
stack.push(20)
stack.push(30)
stack.push(40)
console.log("is peek",stack.peek())
console.log("is pop",stack.pop())
stack.print()