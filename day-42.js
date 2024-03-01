const deleteNode = (root, key) => {
    if (!root) return null

    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.left) return root.right
        if (!root.right) return root.left

        let minNode = getMin(root.right)
        root.val = minNode.val
        root.right = deleteNode(root.right, minNode.val)
    }

    return root
}

const getMin = node => {
    while (node.left) node = node.left
    return node
}
