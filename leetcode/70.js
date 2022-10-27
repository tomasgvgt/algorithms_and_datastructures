/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let a = 0;
    let b = 1;
    let fib;
    while(n > 0){
        fib = a + b;
        a = b;
        b = fib;
        n--;
    }
    return fib;
};