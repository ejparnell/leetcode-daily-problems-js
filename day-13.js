const maxOperations = (nums, k) => {
    const map = new Map()
    let operations = 0
    for (let num of nums) {
        const complement = k - num
        if (map.get(complement) > 0) {
            operations++
            map.set(complement, map.get(complement) - 1)
        } else {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }
    return operations
}
