/**
 * Return the length of the longest substring inside a string.
 * Brute force approach
 */
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let substring = {};
    let longest = 0;
    let count = 0;
    let j = 0;
    for(let i = 0; i < s.length; i++){
        while(j < s.length){
            if(substring[s[j]]){ //i = 0
                count = 0; 
                substring = {}; 
                j = i + 1;
                break;
            }else{
                substring[s[j]] = true;
                count++;
                if(count > longest){
                    longest = count;
                }
                j++;
            }
        }
    }
    return longest; 
}
