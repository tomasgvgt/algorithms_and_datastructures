function merge(left, right){
    let i = 0;
    let j = 0;
    let merged = [];
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            merged.push(left[i]);
            i++;
        }else{
            merged.push(right[j]);
            j++;
        }
    }
    while(i < left.length){
        merged.push(left[i]);
        i++;
    }
    while(j < right.length){
        merged.push(right[j]);
        j++;
    }
    return merged;
}
function divide(arr){
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return [left, right];
}

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let [left, right] = divide(arr);
    let l = mergeSort(left);
    let r = mergeSort(right);
    return merge(l, r);
}

console.log(mergeSort([2, 2, 8, 1, 5, 4, 69, 2, 3]))