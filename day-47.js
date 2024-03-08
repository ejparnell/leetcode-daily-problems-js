const nearestExit = (maze, entrance) => {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const rows = maze.length
    const cols = maze[0].length
    const queue = [[...entrance, 0]]
    maze[entrance[0]][entrance[1]] = '+'
    while (queue.length) {
        const [row, col, steps] = queue.shift()
        for (const [dx, dy] of directions) {
            const newRow = row + dx
            const newCol = col + dy
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze[newRow][newCol] === '.') {
                if (newRow === 0 || newRow === rows - 1 || newCol === 0 || newCol === cols - 1) return steps + 1
                maze[newRow][newCol] = '+'
                queue.push([newRow, newCol, steps + 1])
            }
        }
    }
    return -1
}
