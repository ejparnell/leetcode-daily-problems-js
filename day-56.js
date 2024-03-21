const minEatingSpeed = (piles, h) => {
    const canEatAll = (k) => {
        let hours = 0
        for (const pile of piles) {
            hours += Math.ceil(pile / k)
            if (hours > h) return false
        }
        return true
    }

    let left = 1
    let right = Math.max(...piles)

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (canEatAll(mid)) right = mid
        else left = mid + 1
    }

    return left
}
