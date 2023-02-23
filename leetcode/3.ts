function lengthOfLongestSubstring(s: string): number {
    let letters: any = {};
    let subLength: number = 0;
    let count: number = 0;
    let i: number = 0;
    let j: number;
    if(s.length === 1){
        return 1;
    }
    while(i < s.length){
        j = i;
        while(j < s.length){
            if(count > subLength){
                subLength = count;
            }
            if(letters[s[j]] === true){
                if(count > subLength){
                    subLength = count;
                }
                letters = {};
                count = 0;
                break
            }else{
                letters[s[j]] = true;
                count++;
            }
            j++;
        }
        i++;
    }
    return subLength;
};
