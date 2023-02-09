function searchInsert(nums: number[], target: number): number {
    //Divide and conquer
    let mid: number;
    let start: number = 0;
    let end: number = nums.length - 1;
    if(target <= nums[start]) return 0;
    if(target > nums[end]) return (end + 1);
    if(target === nums[end]) return end;
    while(start < end){
        mid = Math.floor((end - start) / 2 + start);
        if(target === nums[mid]) return mid;
        else if(target < nums[mid]){
            if(target > nums[mid - 1]) return mid;
            else end = mid;
        }else{
            if(target < nums[mid + 1]) return mid + 1;
            else start = mid;
        }
    }
};