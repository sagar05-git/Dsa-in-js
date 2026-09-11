// Stack  LIFO-last in first out
// | Operation |           Time |
// | --------- | -------------: |
// | Push      | O(1) amortized |
// | Pop       |           O(1) |
// | Peek      |           O(1) |
// | Is Empty  |           O(1) |

// Space: O(n)//because the stack can contain n elements.

class Stack {

    constructor() {
        this.items = [];
    }
// Add an element to the top.
    push(value) {
        this.items.push(value);
    }
// Remove the top element.
    pop() {
        return this.items.pop();
    }
    // peek() / top()
// Look at the top element without removing it.
    peek() {
        return this.items[this.items.length - 1];
    }
// Checks whether the stack has no elements.
    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());   // 30
console.log(stack.pop());    // 30
console.log(stack.peek());   // 20
console.log(stack.size());   // 2

