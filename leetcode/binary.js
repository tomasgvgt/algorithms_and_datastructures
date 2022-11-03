function binarySearch(arr, target){
    let mid;
    let start = 0;
    let end = arr.length - 1;
    while(end - start >= 0){
        mid = Math.floor((end + start) / 2);
        console.log(start, end)
        if(arr[mid] === target){ 
            return mid;
        }
        if(target > arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return false;
}

const arr = [2, 5, 6, 10, 11, 12, 13];

console.log(binarySearch(arr, 10));
