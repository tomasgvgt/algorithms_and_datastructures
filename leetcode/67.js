/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let digitA;
    let digitB;
    let carry = 0;
    let c = [];
    while(i >= 0 || j >= 0 || carry === 1){
        if(i < 0){
            digitA = 0;
        }else{
            digitA = parseInt(a[i]);
        }
        if(j < 0){
            digitB = 0;
        }else{
            digitB = parseInt(b[j]);
        }
        if((digitA + digitB + carry) === 0){
            c.push(0);
            carry = 0;
        }else if((digitA + digitB + carry) === 1){
            c.push(1);
            carry = 0;
        }else if((digitA + digitB + carry) === 2){
            console.log(digitA + digitB + carry);
            c.push(0);
            carry = 1;
        }else if((digitA + digitB + carry) === 3){
            c.push(1);
            carry = 1;
        }
        i--;
        j--;
    }
    return c.reverse().join('');
};