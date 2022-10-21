class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Queue{
    #length;
    #first;
    #last;
    constructor(){
        this.#length = 0;
        this.#first = null;
        this.#last = null;
    }
    enqueue(data){
        const node = new Node(data);
        if(this.#length === 0){
            node.next = null;
            this.#last = node;
        }else{
            node.next = this.#first;
            node.next.prev = node;
        }
        this.#first = node;
        node.prev = null;
        this.#length++;
        return this.#length;
    }
    dequeue(){
        if(this.#length === 0){
            return 0;
        }
        if(this.#length === 1){
            this.#first = null;
            this.#last = null;
        }
        else{
            this.#last = this.#last.prev;
            this.#last.next.prev = null;
            this.#last.next = null;
        }
        this.#length--;
        return this.#length;
    }
    peek(){
        if(this.#length === 0){
            return null;
        }
        return this.#last.data;
    }
    last(){
        if(this.#length === 0){
            return null;
        }
        return this.#first.data;
    }
    length(){
        return this.#length;
    }
}


const myQueue = new Queue();

myQueue.enqueue('first');
console.log(myQueue.peek());
console.log(myQueue.last());
console.log(myQueue.length());
myQueue.enqueue('second');
console.log(myQueue.peek());
console.log(myQueue.last());
console.log(myQueue.length());
myQueue.enqueue('third');
console.log(myQueue.peek());
console.log(myQueue.last());
console.log(myQueue.length());
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue.last());
console.log(myQueue.length());



