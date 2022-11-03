/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let i = 0;
    let j;
    let str = '';
    while(i < s.length){
        if((s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 122)){
            str += s[i];
        }
        i++;
    }
    console.log(str);
    i = 0
    j = str.length - 1;
    while(i <= j){
        if(str[i].toLowerCase() === str[j].toLowerCase()){
            i++;
            j--;
        }else{
            return false;
        }
    }

    return true;
};

