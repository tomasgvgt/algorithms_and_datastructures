/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let count = 0;
    let beginSpace = false;
    for(char of s){
        if(char === ' '){
            beginSpace = true;
        }else{
            if(beginSpace){
                beginSpace = false;
                count = 1;
            }else{
                count++;
            }
        }
    }
    return count;
};
