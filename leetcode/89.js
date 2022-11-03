/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    const sorted = [];
    const nums3 = nums1.slice(0, m);
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < m && j < n){
        if(nums3[i] < nums2[j]){
            nums1[k] = nums3[i]
            i++;
            k++;
        }else{
            nums1[k] = nums2[j]
            j++;
            k++;
        }
    }
    while(i < m){
        nums1[k] = nums3[i]
        i++;
        k++;
    }
    while(j < n){
        nums1[k] = nums2[j];
        j++;
        k++;
    }
    return nums1;
};
