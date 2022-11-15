/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const times = {};
    for(let i = 0; i < nums.length; i++){
        if(!times[nums[i]]){
            times[nums[i]] = 1;
        }else if(times[nums[i]] === 1){
            times[nums[i]] = 2;
        }
    }
    for(key in times){
        if(times[key] === 1){
            return key
        }
    }
}
