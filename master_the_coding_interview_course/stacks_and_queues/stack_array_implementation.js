class Stack{
    length;
    data;
    constructor(){
        this.length = 0;
        this.data = [];
    }
    peek(){
        return this.length > 0 ? this.data[this.length - 1] : null;
    }
    push(element){
        this.data.push(element);
        this.length++;
        return this.length;
    }
    pop(){
        if (this.length > 0){
            this.data.pop();
            this.length--;
        }
        return this.length;
    }
    lookup(element){
        for(let i = 0; i < this.length; i++){
            if (this.data[i] === element){
                return i
            }
        }
        return null;
    }
}

module.exports = Stack;
// const myStack = new Stack();
// console.log(myStack.data);
// myStack.push(1);
// console.log(myStack.data);
// myStack.push(5);
// myStack.push(4);
// console.log(myStack.data());
// console.log(myStack.peek());
// console.log(myStack.data);
// console.log(myStack.lookup(5))