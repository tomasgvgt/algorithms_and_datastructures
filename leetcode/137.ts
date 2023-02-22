function singleNumber(nums: number[]): number {
    let occurrencies: {} = {};
    let num: number;
    for(num of nums){
        console.log(num);
        if(occurrencies[num]) occurrencies[num]++;
        else occurrencies[num] = 1;
    }
    let singleOccurrency: any = Object.keys(occurrencies).find(key => occurrencies[key]===1);
    return singleOccurrency;
};
