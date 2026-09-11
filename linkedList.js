

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


// Linked list with head and tail

class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

// LinkedList class
class LinkedList{
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
console.log(`list is empty ${list.isEmpty()}`)
console.log(`Size of list is  ${list.getSize()}`)

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(5)
console.log("prepend......................")
list.print()
console.log(`Size of list is  ${list.getSize()}`)
console.log("append......................")
list.append(40)
list.append(50)
list.append(60)
list.print()

console.log("remove from......................")

console.log(list.removeFromFront())
list.print()

console.log(list.removeFromEnd(),"remooveee end")
list.print()
console.log(`list is empty ${list.isEmpty()}`)
console.log(`Size of list is  ${list.getSize()}`)
list.print()

