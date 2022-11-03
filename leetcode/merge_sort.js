
function divide(arr){
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return [left, right];
}

function merge(left, right){
    const arr = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            arr.push(left[i]);
            i++;
        }else{
            arr.push(right[j])
            j++;
        }
    }
    while(i < left.length){
        arr.push(left[i]);
        i++;
    }
    while(j < right.length){
        arr.push(right[j]);
        j++;
    }
    console.log(arr);
    return arr;
}
function mergeSort(arr){
    if(arr.length <= 1){
        console.log(arr);
        return(arr)
    }
    let [l, r] = divide(arr);
    let left = mergeSort(l);
    let right = mergeSort(r);
    return merge(left, right);
}

const arr1 = [2, 2, 60, 3, 8, 20, 8, 10, 68, 11, 25, 1];

const arr2 = mergeSort(arr1);
console.log(arr2);
