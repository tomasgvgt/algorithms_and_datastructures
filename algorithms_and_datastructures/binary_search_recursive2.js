function recursiveBinarySearch(array, target){
    //define the variables that you need to define outside the recursion.
    let first = 0;
    let last = array.length - 1;
    let midpoint = Math.floor((last + first) / 2);
    return(recursionHelper(array, target, first, last, midpoint));
}

function recursionHelper(array, target, first, last, midpoint){
    if((last - first) < 0){
        return(false);
    }
    else{
        if(target === array[midpoint]){
            return(midpoint);
        }else if(target < array[midpoint]){
            last = midpoint - 1;
            midpoint = Math.floor((last + first) / 2);
            return(recursionHelper(array, target, first, last, midpoint));
        }else{
            first = midpoint + 1;
            midpoint = Math.floor((last + first) / 2);
            return(recursionHelper(array, target, first, last, midpoint));
        }
    }
}


let array = [10, 30, 50, 60, 80, 100, 110];
console.log(recursiveBinarySearch(array, 30));
