function reverse(arr, i, j){
    if(i >= j){
        return arr;
    }
    let a;
    a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
    return reverse(arr, ++i, --j);
}

function reverseString(string){
    let i = 0;
    let j = string.length - 1;
    let array = string.split('');
    let reversedArray = reverse(array, i, j);
    return array.join("").toString();
}

console.log(reverseString("hola"));

