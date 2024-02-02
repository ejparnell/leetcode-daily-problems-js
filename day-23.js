const equalPairs = grid => {
    const n = grid.length
    const rowCount = new Map()
    let count = 0
    
    for (let row of grid) {
        const key = row.join(',')
        rowCount.set(key, (rowCount.get(key) || 0) + 1)
    }
    
    for (let col = 0; col < n; col++) {
        const column = []
        for (let row = 0; row < n; row++) {
            column.push(grid[row][col])
        }
        const key = column.join(',')
        count += rowCount.get(key) || 0
    }
    
    return count
}
