const totalCost = (costs, k, candidates) => {
    let left = 0
    let right = costs.length - 1
    const leftHeap = []
    const rightHeap = []
    let total = 0

    while (k--) {
        while (leftHeap.length < candidates && left <= right) leftHeap.push(costs[left++])
        while (rightHeap.length < candidates && left <= right) rightHeap.push(costs[right--])

        leftHeap.sort((a, b) => a - b)
        rightHeap.sort((a, b) => a - b)

        if (leftHeap.length && rightHeap.length) {
            if (leftHeap[0] <= rightHeap[0]) total += leftHeap.shift()
            else total += rightHeap.shift()
        } else if (leftHeap.length) total += leftHeap.shift()
        else total += rightHeap.shift()
    }

    return total
}
