var MyQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
    for(i = this.stack.length -1; i > 0; i--){
        this.stack[i] = this.stack[i-1];
        if(i === 1) {this.stack[0] = x};
    }
    console.log(this.stack)
    return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack.length > 0){
        return this.stack[this.stack.length - 1];
    }
    return;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
