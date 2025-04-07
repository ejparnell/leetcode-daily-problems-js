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

var rotate = function(nums, k) {
    k = k % nums.length
    nums.reverse()
    let chunk = nums.splice(0, k)
    chunk.reverse()
    nums.reverse()
    let rotated = [...chunk, ...nums]
    for (let i = 0; i < rotated.length; i++) {
        nums[i] = rotated[i]
    }
};