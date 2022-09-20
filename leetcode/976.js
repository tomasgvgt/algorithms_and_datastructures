/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    let numsLength = nums.length;
    let sortedArray = sort(nums, nums.length);
    let largestPerimeter = findLargestPerimeter(sortedArray, sortedArray.length);
    return(largestPerimeter);
};

var sort = function(array, length){
    let i, j, k, tmp;
    for(i = length - 1; i >= 0; i--){
        for(j = 0, k = 0; j <= i; j++){
            if(array[j] > array[k]){
                k = j;
            }
        }
        j--;
        tmp = array[j];
        array[j] = array[k];
        array[k] = tmp;
    }
    return(array);
}

var findLargestPerimeter = function(array, length){
    let i;
    let largestPerimeter;

    for(i = length - 1; i >= 2; i--){
        if(array[i - 1] + array[i - 2] > array[i]){
            return (array[i] + array[i - 1] + array[i - 2]);
        }
    }
    return(0);
}
