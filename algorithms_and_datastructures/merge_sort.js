function divide(array){
    //Runs on O(logn) time + the time taken by the slice method 1q@
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return [left, right];
}

function merge(left, right){
    //runs in O(n) time
    let arr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return ([...arr, ...left, ...right]);

}

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }
    let divided = divide(array);
    let left = mergeSort(divided[0]);
    let right = mergeSort(divided[1]);
    return merge(left, right);
}

function verify(array){
    if(array.length <= 1){
        return true;
    }
    return array[0] < array[1] && verify(array.slice(1));
}

let a1 = [3, 20, 100, 10, 5, 1, 8, 30];
let a2 = mergeSort(a1);

console.log(verify(a1));
console.log(verify(a2));