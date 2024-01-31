const uniqueOccurrences = arr => {
    const countMap = new Map()
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1)
    }
    const occurrences = [...countMap.values()]
    return new Set(occurrences).size === occurrences.length
}
