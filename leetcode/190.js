/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseString = function(str){
    let reversed = "";
    while(str.length < 32){
        str = "0" + str;
    }
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }

    return reversed
}
var reverseBits = function(n) {
    let nBin = n.toString(2);
    let reversed = reverseString(nBin)
    return parseInt(reversed, 2)
};
