/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = new Set();
    for(n of nums){
        if(!set.has(n)) set.add(n);
        else return true;
    }
    return false;
};
