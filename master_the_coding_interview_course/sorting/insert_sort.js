function insertSort(arr){
    if(arr.length === 1 || arr.length === 0){
        return arr;
    }
    for(let i = 1; i < arr.length; i++){
        if(arr[i]  < arr[i - 1]){
            let tmp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
        }
        for(let j = i - 1; j > 0; j--){
            if(arr[j] < arr[j - 1]){
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }else{
                break;
            }
        }
    }
    return arr;
}

console.log(insertSort([1, 34, 54, 23, 12, 22, 5, 2, 7]));


console.log(insertSort([5, 2, 7, 1]));