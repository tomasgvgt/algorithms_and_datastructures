function maxArea(height: number[]): number {
    let i: number = 0;
    let j: number = height.length - 1;
    let maxArea: number = 0;
    let area: number;
    while(i < j){
        if(height[i] > height[j]){
            area = height[j] * (j - i);
            j--;
        }else{
            area = height[i] * (j - i);
            i++;
        }
        if(area > maxArea) maxArea = area;
        console.log(`i: ${height[i]}, j: ${height[j]}, area: ${area}`);
    }
    return maxArea;
};