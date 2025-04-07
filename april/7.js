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

var containsDuplicate = function(nums) {
    let seen = new Set;
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) return true
        else seen.add(nums[i]);
    }
    return false
};

var singleNumber = function(nums) {
    let found = 0;
    for (let i = 0; i < nums.length; i++) {
        found = found ^ nums[i]
    }
    return found;
};