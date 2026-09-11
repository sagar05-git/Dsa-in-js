
// Linked list with head and tail

class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

// LinkedList class
export class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0;
       }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }

    // print linkedlist
    print(){
        if(this.isEmpty()){
            console.log(`list is empty`)
        }else{
            let current=this.head; //current node point the head of list
            let listValue='' 
            // run unitle current node is not null
            while(current){
                listValue += `${current.value} ` ;
                current = current.next
            }
            console.log(listValue,"listValue")
        }
    }

    // prepend()
    prepend(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

 
    append(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node
        }else{
            this.tail.next=node//add new node in next of tail 
            this.tail=node//now set tail is new node
        }
        this.size++
      
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }else{
            let removeNode=this.head
            if(this.size>1){
            this.head=removeNode.next;//make head next value
            }else{
                this.head=null
            }
            this.size--
            return removeNode.value;
        }

    }

    removeFromEnd(){
        let removedNode=this.tail.value
        if(this.isEmpty()){
            return null
        }else{
            if(this.size>1){
                let prev=this.head;
                // run until 
                while(prev.next!==this.tail){
                    prev=prev.next
                }
                prev.next=null;
                this.tail=prev;
            }else{
                this.head=null;
                this.tail=null;
            }
            this.size--
            return removedNode;//removed node
        }
    }

}


const list =new LinkedList()
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

