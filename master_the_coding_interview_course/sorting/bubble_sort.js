function bubbleSort(arr){
    let a;
    for(let i = arr.length; i > 0; i--){
        for(let j = 1; j < i; j++){
            if(arr[j - 1] > arr[j]){
                a = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr
}

console.log(bubbleSort([2, 1]));
