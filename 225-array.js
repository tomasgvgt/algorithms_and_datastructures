var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let length = this.queue.length;
    let y = length;
    this.queue[length] = x;
    while(y > 0){
        this.queue[length] = this.queue.shift();
        y--;
    }
    return x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.queue.length === 0){
        return null
    }
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.queue.length === 0){
        return null;
    }
    return this.queue[0];
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
