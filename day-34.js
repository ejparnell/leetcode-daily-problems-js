const leafSimilar = (root1, root2) => {
    const getLeaves = root => {
        const leaves = []
        const dfs = node => {
            if (!node) return
            if (!node.left && !node.right) leaves.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }
        dfs(root)
        return leaves
    }
    
    const leaves1 = getLeaves(root1)
    const leaves2 = getLeaves(root2)
    return leaves1.join(',') === leaves2.join(',')
}
