const guessNumber = n => {
    let left = 1
    let right = n
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const result = guess(mid)
        if (result === 0) return mid
        if (result === -1) right = mid - 1
        else left = mid + 1
    }
    return -1
}
