const largestAltitude = gain => {
    let maxAltitude = 0
    let currentAltitude = 0
    for (let g of gain) {
        currentAltitude += g
        maxAltitude = Math.max(maxAltitude, currentAltitude)
    }
    return maxAltitude
}
