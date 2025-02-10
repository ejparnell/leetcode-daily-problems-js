const orangesRotting = grid => {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const rows = grid.length
    const cols = grid[0].length
    const queue = []
    let freshCount = 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c, 0])
            if (grid[r][c] === 1) freshCount++
        }
    }
    let minutes = 0
    while (queue.length) {
        const [row, col, time] = queue.shift()
        minutes = time
        for (const [dx, dy] of directions) {
            const newRow = row + dx
            const newCol = col + dy
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
                grid[newRow][newCol] = 2
                freshCount--
                queue.push([newRow, newCol, time + 1])
            }
        }
    }
    return freshCount === 0 ? minutes : -1
}
