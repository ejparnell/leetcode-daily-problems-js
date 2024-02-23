const longestZigZag = root => {
    let maxLength = 0

    const dfs = (node, direction, length) => {
        if (!node) return
        maxLength = Math.max(maxLength, length)
        if (direction === 'left') {
            dfs(node.left, 'right', length + 1)
            dfs(node.right, 'left', 1)
        } else {
            dfs(node.right, 'left', length + 1)
            dfs(node.left, 'right', 1)
        }
    }

    dfs(root, 'left', 0)
    dfs(root, 'right', 0)

    return maxLength
}
