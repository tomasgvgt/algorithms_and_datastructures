/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    //find if magazine has all the letters from ransomNote.
    const ransomNoteDict  = {};
    const magazineDict = {};
    for (char of ransomNote){
        if(!ransomNoteDict[char]){
            ransomNoteDict[char] = 1;
        }else{
            ransomNoteDict[char]++;
        }
    }
    for (char of magazine){
         if(!magazineDict[char]){
            magazineDict[char] = 1;
        }else{
            magazineDict[char]++;
        }
    }
    for(key in ransomNoteDict){
        if((ransomNoteDict[key] > magazineDict[key]) || (!magazineDict[key])){
            return false
        }
    }
    return true;
};
