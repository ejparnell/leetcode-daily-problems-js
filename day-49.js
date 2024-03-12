const findKthLargest = (nums, k) => {
    const heap = []
    for (const num of nums) {
        heap.push(num)
        heap.sort((a, b) => a - b)
        if (heap.length > k) heap.shift()
    }
    return heap[0]
}
