//Create a function that returns true if there is a common element between array1 and array2. 

let array1 = ['a', 'z', 'x', 'y'];
let array2 = ['b', 'o', 'a'];

function commonElement(){
    let objArr1 = {};
    for(element of array1){
        objArr1[element] = true;
    };
    console.log(objArr1);

    for(element of array2){
        if(objArr1[element] === true){
            return true
        }
    }
    return false
}

console.log(commonElement());

//Time complexity O(a + b)
//Space complexity O(a)




//Solution with js methods:

// function commonElement(){
//     return array1.some(item=>array2.includes(item));
// }