/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let count = 0;
    while(n > 0){
        if(n & 1 == 1){
            count ++;
        }
        n = n >>> 1;
    }
    return(count);
};

hammingWeight(7);

// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  */
// var hammingWeight = function(n) {
//     let oneBits = 0;
//     //Turn the input into a binary string
//     let nBin = n.toString(2);
//     //Traverse the string and count the number of ones in the string
//     for(d of nBin){
//         if (d === "1") oneBits += 1;
//     }
//     //Return the number of ones.
//     return oneBits
// };