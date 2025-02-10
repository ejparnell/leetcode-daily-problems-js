const maxScore = (nums1, nums2, k) => {
    const pairs = nums1.map((val, idx) => [nums2[idx], val])
    pairs.sort((a, b) => b[0] - a[0])

    const heap = []
    let sum = 0
    let maxScore = 0

    for (const [minVal, num] of pairs) {
        heap.push(num)
        sum += num
        if (heap.length > k) sum -= heap.shift()
        if (heap.length === k) maxScore = Math.max(maxScore, sum * minVal)
    }

    return maxScore
}
