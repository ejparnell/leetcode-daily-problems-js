const productExceptSelf = nums => {
    const n = nums.length
    const answer = Array(n).fill(1)
    let prefix = 1
    let suffix = 1
    for (let i = 0; i < n; i++) {
        answer[i] *= prefix
        prefix *= nums[i]
        answer[n - 1 - i] *= suffix
        suffix *= nums[n - 1 - i]
    }
    return answer
}
