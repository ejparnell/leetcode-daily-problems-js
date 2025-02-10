const numTilings = n => {
    const MOD = 1e9 + 7
    if (n === 1) return 1
    if (n === 2) return 2

    let dp = [1, 1, 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD
    }
    return dp[n]
}
