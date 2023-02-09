function findFactorialRecursive(num){
    if(num === 1){
        console.log(num);
        return num
    }
    console.log(num);
    let factorial = findFactorialRecursive(num - 1) * num;
    console.log(factorial);
    return factorial
}

console.log(findFactorialRecursive(10));

function findFactorialIterative(num){
    let factorial = 1;
    while(num > 0){
        factorial *= num;
        num--;
    }
    return factorial;
}

console.log(findFactorialIterative(5));