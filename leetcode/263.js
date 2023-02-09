/**
 * @param {number} n
 * @return {boolean}
 */

var isPrime = function(num){
    for(let f = 2; f < num; f++){
        if (num % f === 0) return false
    }
    return true
}
var isUgly = function(n) {
    let ugly = false;
    if(n <= 0) return false;
    if(n === 1 || n === 2 || n === 3 || n === 4 || n === 5) return true;
    for(let f = 2; f < n; f++){
        if(f < 6){
            if (n === 4 && n % f === 0){
                return false
            }
            if(n !== 4 && n % f === 0){
                ugly = true;
            }
        }else{
            if (n % f === 0){
                if(isPrime(f)) return false
            }
        }
    }
    if (ugly === false) return false;
    return true
};
