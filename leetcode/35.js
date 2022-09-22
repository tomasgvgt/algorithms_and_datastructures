/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while(start <= end){
        mid = Math.floor(((end - start) / 2) + start);
        if(target === nums[mid]){
            return mid;
        }else if(target < nums[0]){
            return 0;
        }else if(target < nums[mid]){
            if (target > nums[mid - 1]){
                return mid;
            }
            end = mid - 1;
        }else{
            if (target < nums[mid + 1]){  
                return (mid + 1);
            }
            if (mid === nums.length - 1){
                return (mid + 1);
            }
            start = mid + 1;
        }
    }
    return;
};
