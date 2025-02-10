const minReorder = (n, connections) => {
    const graph = new Map()
    let changes = 0

    for (const [u, v] of connections) {
        if (!graph.has(u)) graph.set(u, [])
        if (!graph.has(v)) graph.set(v, [])
        graph.get(u).push([v, 1]) // original direction
        graph.get(v).push([u, 0]) // reverse direction
    }

    const dfs = (node, parent) => {
        for (const [neighbor, needsChange] of graph.get(node) || []) {
            if (neighbor === parent) continue
            changes += needsChange
            dfs(neighbor, node)
        }
    }

    dfs(0, -1)
    return changes
}
