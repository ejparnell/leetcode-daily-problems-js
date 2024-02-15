const pairSum = head => {
    const values = []
    let current = head
    while (current) {
        values.push(current.val)
        current = current.next
    }
    
    let maxSum = 0
    let n = values.length
    for (let i = 0; i < n / 2; i++) {
        maxSum = Math.max(maxSum, values[i] + values[n - 1 - i])
    }
    return maxSum
}
