/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let idx;
    while(nums.includes(val)){
        idx = nums.indexOf(val);
        nums.splice(idx, 1);
    }
    return nums
};