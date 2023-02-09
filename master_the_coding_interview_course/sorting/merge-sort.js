function divide(arr){
    let mid = Math.floor(arr.length / 2);
    let l = arr.slice(0, mid);
    let r = arr.slice(mid, arr.length);
    return [l, r];
}

function merge(l, r){
    const merged = [];
    let i = 0;
    let j = 0;
    while(i < l.length && j < r.length){
        if(l[i] < r[j]){
            merged.push(l[i]);
            i++;
        }else{
            merged.push(r[j]);
            j++;
        }
    }
    while(i < l.length){
        merged.push(l[i]);
        i++;
    }
    while(j < r.length){
        merged.push(r[j]);
        j++
    }
    return merged;
}

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }
    let [l, r] = divide(arr);
    l = mergeSort(l);
    r = mergeSort(r);
    return merge(l, r);
}

console.log(mergeSort([2, 5, 1, 0, 4, 10, 8]));