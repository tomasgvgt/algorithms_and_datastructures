function reverse(str){
    if( str === 'undefined' || str.length < 3){
        return str
    }
    let arr = str.split('');
    let tmp;
    for(let i = 0, j = arr.length -1; i <= j; i++, j--){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    str = arr.join('');
    return str;
}

//Using javascript functions
function reverse2(str){
    if( str === 'undefined' || str.length < 3){
        return str
    }
    return str.split('').reverse().join('');
}

//Using arrow functions
const reverse3 = str => str.split('').reverse().join('');

let string = 'hewwwwllow!';
console.log(reverse3(string));