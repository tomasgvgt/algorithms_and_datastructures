/**
 * Lenght of the longest substring inside a string.
 * Sliding wondow approach.
 */


function lengthOfLongestSubstring(s: string): number {
    //Create a variable to keep track of the length of current window
    let currentLength: number = 0;
    //Create a variable to keep track of the longest length
    let longestLength: number = 0;
    //Create an object to keep track of the characters in current substring.
    let subString: any = {};
    //Create pointers to left and right side of the window
    let l: number = 0;
    let r: number = 0;
    //Slide the window
    //Move rigth every time there is no duplicate
    while(r < s.length){
        //Move left every time a duplicate is found in right and remove the left element from the current substring
        while(subString[s[r]] === true){
            subString[s[l]] = false;
            l++;
        }
        currentLength = r - l + 1;
        longestLength =  currentLength > longestLength ? currentLength : longestLength;
        subString[s[r]] = true;
        r++;
    }
    return longestLength;
};