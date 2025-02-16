const minCostClimbingStairs = cost => {
    let prev1 = 0
    let prev2 = 0
    for (let i = 2; i <= cost.length; i++) {
        const curr = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2])
        prev2 = prev1
        prev1 = curr
    }
    return prev1
}
