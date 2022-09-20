/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    let i = 1;
    let k = 1;
    let unique = nums[0];
    while(i<nums.length){
        if(nums[i] === unique){
            nums.splice(i, 1);
        }else{
            unique = nums[i];
            i++;
            k++;
        }
    }
    return k;
};
