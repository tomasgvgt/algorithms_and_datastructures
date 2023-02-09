function maxContainer(height){
    let maxArea = 0;
    let area;
    let smallerLine;
    for(let i = 0, j = height.length - 1; i < j; ){
        if(height[i] > height[j]){
            smallerLine = height[j];
            area = (j - i) * smallerLine;
            j--;
        }else{
            smallerLine = height[i];
            area = (j - i) * smallerLine;
            i++;
        }
        if(area > maxArea) maxArea = area;
    }
    return maxArea;
}

console.log(maxContainer([1,1]));