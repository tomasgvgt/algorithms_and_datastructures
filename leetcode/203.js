/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let num;
    let i = 0;
    let digit;
    let sum;
    while(i < 10){
        if (i === 1){
            num = n;
        }else{
            num = sum;
        }
        sum = 0;
        while(num > 0){
            digit = num % 10;
            sum += (digit ** 2);
            num = Math.floor(num / 10); 
        }
        if(sum === 1){
            return true;
        }
        i++;
    }
    return(false)
};