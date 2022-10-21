//Given an array of integers, return the first recurring integer.
//Example:
//Given an array [2, 5, 1, 2, 3, 5, 1, 2, 4] it should return 2

//Time complexity O(n)
function firstRecurringInt(arr){
    const map = {};
    for(element of arr){
        if(map[element]){
            return element;
        }
        map[element] = true;
    }
}


const array = [0, 5, 1, 2, 3, 4, 7, 20, 41];

console.log(firstRecurringInt(array));