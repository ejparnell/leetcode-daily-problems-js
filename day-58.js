const combinationSum3 = (k, n) => {
    const result = []

    const backtrack = (start, combination, sum) => {
        if (combination.length === k && sum === n) {
            result.push([...combination])
            return
        }

        if (combination.length === k || sum > n) return

        for (let i = start; i <= 9; i++) {
            combination.push(i)
            backtrack(i + 1, combination, sum + i)
            combination.pop()
        }
    }

    backtrack(1, [], 0)
    return result
}
