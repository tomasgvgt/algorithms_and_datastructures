(()=>{
    function divide(arr: number[]): [number[], number[]]{
        let mid: number = Math.floor(arr.length / 2);
        let l: number[] = arr.slice(0, mid);
        let r: number[] = arr.slice(mid, arr.length);
        return [l, r];
    }
    function merge(l: number[], r: number[]): number[]{
        let i: number = 0;
        let j: number = 0;
        let merged: number[] = [];
        while(i < l.length && j < r.length){
            if(l[i] < r[j]){
                merged.push(l[i]);
                i++;
            }
            else{
                merged.push(r[j]);
                j++;
            }
        }
        while(i < l.length){
            merged.push(l[i]);
            i++
        }
        while(j < r.length){
            merged.push(r[j]);
            j++;
        }
        return merged;
    }
    
    function mergeSort(arr: number[]): number[]{
        if(arr.length === 1){
            return arr
        }
        let l: number[];
        let r: number[];
        [l, r] = divide(arr);
        l = mergeSort(l);
        r = mergeSort(r);
        return merge(l, r);
    }
})()
