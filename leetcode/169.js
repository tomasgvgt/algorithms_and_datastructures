/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    const times = {};
    for(num of nums){
        if(!times[num]){
            times[num] = 1;
        }else{
            times[num] += 1;
            if(times[num] > nums.length / 2){
                return num;
            }
        }
    }
};
