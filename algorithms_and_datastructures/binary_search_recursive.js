function recursiveBinarySearch(array, target){
    let midpoint = Math.floor((array.length - 1) / 2);
    if(array.length === 0){
        return(false);
    }
    if(target === array[midpoint]){
        return(true);
    }else if(target < array[midpoint]){
        return(recursiveBinarySearch(array.slice(0, midpoint), target));
    }else{
        return(recursiveBinarySearch(array.slice(midpoint + 1), target));
    }
}



let array = [10, 30, 50, 60, 80, 100, 110];
console.log(recursiveBinarySearch(array, 110));
