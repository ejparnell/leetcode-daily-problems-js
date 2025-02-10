const goodNodes = (root, maxVal = -Infinity) => {
    if (!root) return 0
    let isGood = root.val >= maxVal ? 1 : 0
    maxVal = Math.max(maxVal, root.val)
    return isGood + goodNodes(root.left, maxVal) + goodNodes(root.right, maxVal)
}
