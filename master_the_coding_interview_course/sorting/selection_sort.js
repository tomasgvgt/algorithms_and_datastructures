function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = tmp;

    }
    return arr;
}

console.log(selectionSort([1, 34, 54, 23, 12, 22, 5, 2, 7]));


console.log(selectionSort([5, 2, 7, 1]));
