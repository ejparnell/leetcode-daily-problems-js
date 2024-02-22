const pathSum = (root, targetSum) => {
    const dfs = (node, currentSum, prefixSums) => {
        if (!node) return 0

        currentSum += node.val
        let count = prefixSums.get(currentSum - targetSum) || 0
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1)

        count += dfs(node.left, currentSum, prefixSums)
        count += dfs(node.right, currentSum, prefixSums)

        prefixSums.set(currentSum, prefixSums.get(currentSum) - 1)
        return count
    }

    return dfs(root, 0, new Map([[0, 1]]))
}
