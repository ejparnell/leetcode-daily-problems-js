const successfulPairs = (spells, potions, success) => {
    potions.sort((a, b) => a - b)
    const result = []

    for (const spell of spells) {
        let left = 0
        let right = potions.length - 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (spell * potions[mid] >= success) right = mid - 1
            else left = mid + 1
        }
        result.push(potions.length - left)
    }

    return result
}
