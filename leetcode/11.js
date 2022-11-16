/**
 * @param {number[]} height
 * @return {number}
 */


 var maxArea = function(height) {
    let maxArea = 0;
    let area;
    let currentHeight;
    let left = 0;
    let right = height.length - 1;
    if(height.length === 0 || height.length === 1){
        return maxArea;
    }
    while(left < right){
        width = right - left;
        if(height[left] < height[right]){
            area = width * height[left];
            left++;
        }else{
            area = width * height[right];
            right--;
        }
        maxArea = area > maxArea ? area : maxArea;
    }
    return maxArea;
};