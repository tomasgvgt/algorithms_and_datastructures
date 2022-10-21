class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Stack{
    #length;
    #top;
    constructor(){
        this.#length = 0;
        this.#top = null;
    }
    push(element){
        const node = new Node(element);
        node.next = this.#top;
        this.#top = node;
        this.#length++;
        return this.#length;
    }
    pop(){
        if(this.#length > 0){
            this.#top = this.#top.next;
            this.#length--;
        }
        return this.#length;
    }
    peek(){
        return this.#top ? this.#top.data : null;
    }
    data(){
        const data = [];
        let tmp = this.#top;
        while(tmp){
            data.push(tmp.data);
            tmp = tmp.next;
        }
        return data;
    }
}

const myStack = new Stack();
console.log(myStack.data());
console.log(myStack.peek());
myStack.push('google');
console.log(myStack.data());
myStack.push('udemy');
myStack.push('platzi');
console.log(myStack.data());
console.log(myStack.peek());
console.log(myStack.data());
