
function binarySearch(array, target){
    let first = 0;
    let last = array.length - 1;
    let midpoint = Math.floor((first + last) / 2);
    while((last - first) >= 0){
        if(target === array[midpoint]){
            return(midpoint);
        }else if(target < array[midpoint]){
            last = midpoint - 1;
        }else{
            first = midpoint + 1;
        }
        midpoint = Math.floor((first + last) / 2);
    }
    return(undefined);
}

let array = [10, 30, 50, 60, 80, 100, 110];
console.log(binarySearch(array, 110));