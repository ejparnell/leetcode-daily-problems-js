var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i -1];
        if (diff > 0) {
            profit += diff;
        }
    }
    return profit;
};