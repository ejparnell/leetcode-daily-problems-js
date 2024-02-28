const maxLevelSum = root => {
    if (!root) return 0

    const queue = [root]
    let maxSum = -Infinity
    let maxLevel = 0
    let currentLevel = 0

    while (queue.length) {
        currentLevel++
        let levelSum = 0
        const levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            levelSum += node.val
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        if (levelSum > maxSum) {
            maxSum = levelSum
            maxLevel = currentLevel
        }
    }

    return maxLevel
}
