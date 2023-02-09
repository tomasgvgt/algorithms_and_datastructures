function fibo(a, b, steps){
    if(steps === 1){
        return b + a;
    }
    let fibonacci = a + b;
    a = b;
    b = fibonacci;
    return fibo(a, b, --steps);
}

function fibonacciRecursive(steps){
    let a = 1;
    let b = 2;
    if(steps === a) return a;
    if(steps === b) return b + a;
    let fibonacci = 1
    return fibo(a, b, steps);

}

function fibonacciIterative(steps){
    let a = 1;
    let b = 2;
    let fibo;
    if(steps === a) return a;
    if(steps === b) return b + a;
    while(steps > 0){
        fibo = a + b;
        a = b;
        b = fibo;
        steps--;
    }
    return fibo;
}

console.log(fibonacciIterative(3));

console.log(fibonacciRecursive(4));