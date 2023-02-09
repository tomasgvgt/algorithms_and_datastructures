function climbStairs(n: number): number {
    let a: number = 1;
    let b: number = 1;
    let tmp: number;
    let step: number = 1;
    while(step <= n){
        if(step === n) return b;
        tmp = b;
        b = a + b;
        a = tmp;
        step++;
    }
};
