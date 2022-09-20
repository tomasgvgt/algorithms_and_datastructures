//Sort elements

let canMakeArithmeticProgression = function(arr) {
    let isProgression;
    let arrLength = arr.length;
    arr = sort(arr, arrLength);
    console.log(arr);
    isProgression = progression(arr, arrLength);

    return(isProgression);
  };
  
let sort = function(array, arrayLength){
    let largestIdx;
    let i, j, tmp;
    
    for(i = arrayLength - 1; i >= 0; i--){
        largestIdx = 0
        for(j = 0; j <= i; j++){
            if(array[j] > array[largestIdx]){
                largestIdx = j;
            }
        }
        j--;
        tmp = array[j];
        array[j] = array[largestIdx];
        array[largestIdx] = tmp;
        }  
    return(array);
    }

let progression = function(array, arrayLength){
    let i;
    let difference = array[1] - array[0];
    for(i = 1; i < arrayLength - 1; i++){
        if(array[i + 1] - array[i] != difference){
            return(false);
        }
    }
    return(true);
    
}
console.log(canMakeArithmeticProgression([3, 5, 1]));