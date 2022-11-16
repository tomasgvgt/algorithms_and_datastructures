let Node = function(val) {
    this.val = val;
    this.next = null;
}

var Queue = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}
Queue.prototype.enqueue = function(val){
    let node = new Node(val);
    if(this.length === 0){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        this.tail = node;
    }
    this.length++;
    return val
}

Queue.prototype.dequeue = function(){
    if(this.head){
        let val = this.head.val;
        this.head = this.head.next;
        if(this.head === null){
            this.tail = null;
        }
        this.length--;
        return val;
    }
    return null;
}



var MyStack = function() {
    this.queue = new Queue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let len = this.queue.length;
    this.queue.enqueue(x);
    while(len){
        this.queue.enqueue(this.queue.dequeue());
        len--;
    }
    return x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    console.log
    return this.queue.head.val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.length === 0 ? true : false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */