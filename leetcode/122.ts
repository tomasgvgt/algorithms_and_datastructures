function maxProfit(prices: number[]): number {
    let i: number = 0;
    let lowestIdx: number = 0;
    let maxProfit: number = 0;
    while(i < prices.length){
        if(prices[i] - prices[lowestIdx] < 0) lowestIdx = i;
        if(prices[i] - prices[lowestIdx] > maxProfit) maxProfit = prices[i] - prices[lowestIdx];
        i++;
    }
    return maxProfit;
};
