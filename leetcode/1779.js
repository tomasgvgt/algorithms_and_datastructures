/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let i, smallestIndex, validPointsLength;
    let pointsLength = points.length;
    let validPoints = [];
    let distance;
    let smallestDistance;
    // Find the valid points and compute manhattan distance on them
    for(i = 0; i < pointsLength; i++){
        if(points[i][0] === x || points[i][1] === y){
            distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            validPoints.push([distance, i]);
        }
    }
    validPointsLength = validPoints.length;
    if (validPointsLength == 0){
        return -1;
    }
    // Return the smallest manhattan distance
    smallestDistance = validPoints[0][0];
    smallestIndex = validPoints[0][1];
    for(i = 0; i < validPointsLength; i++){
        if(validPoints[i][0] < smallestDistance){
            smallestDistance = validPoints[i][0];
            smallestIndex = validPoints[i][1];
        }
    }
    return(smallestIndex);
};