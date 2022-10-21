// Return true if there are 2 elements in the array that added up, are equal to a given number.



let array = [6, 4, 3, 2, 1, 7];
let number = 12;

//Naive approach
// function hasPairWithSum(arr, num){
//     for(let i = 0; i < arr.length; i++){ 
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === num){
//                 return true
//             }
//         }
//     }
//     return false;
// }
//Time complexity O(n^2)


//Time efficient approach
function hasPairWithSum(arr, sum){
    //Add the complement of the sum to a set.
    let complements = new Set();
    for(element of arr){
        if(complements.has(sum - element)){
            return true
        }
        complements.add(element)
    }
    return false;
    //If for the element there is a complement in the set return true.
}

//Time complexity O(n);

console.log(hasPairWithSum(array, number));

