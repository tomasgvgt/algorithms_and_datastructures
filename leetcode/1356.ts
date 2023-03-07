function sortByBits(arr: number[]): number[] {
    let obj: any = {};
    let numberOfOnes: number;
    let sortedObjectKeys: any = [];
    let sortedArr: any = [];
    arr = arr.sort((a,b) => a-b);
    let key: any;

    for(let n of arr){
        numberOfOnes = n.toString(2).replace(/0/g, "").length;
        console.log(n +  ' binary: ' +  n.toString(2) + ' number of ones: ' + numberOfOnes);
        if(!obj[numberOfOnes]){
            obj[numberOfOnes] = [];
        }
        obj[numberOfOnes].push(n);
    }
    sortedObjectKeys = Object.keys(obj).sort((a,b)=>parseInt(a)-parseInt(b));
    console.log(obj);
    for(key of sortedObjectKeys)
        sortedArr = sortedArr.concat(obj[key]);
    return sortedArr;
};