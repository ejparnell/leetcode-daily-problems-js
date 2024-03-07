const calcEquation = (equations, values, queries) => {
    const graph = new Map()

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i]
        const value = values[i]
        if (!graph.has(a)) graph.set(a, [])
        if (!graph.has(b)) graph.set(b, [])
        graph.get(a).push([b, value])
        graph.get(b).push([a, 1 / value])
    }

    const dfs = (current, target, visited) => {
        if (!graph.has(current) || !graph.has(target)) return -1.0
        if (current === target) return 1.0

        visited.add(current)

        for (const [neighbor, value] of graph.get(current)) {
            if (visited.has(neighbor)) continue
            const product = dfs(neighbor, target, visited)
            if (product !== -1.0) return product * value
        }

        return -1.0
    }

    const results = []
    for (const [c, d] of queries) {
        results.push(dfs(c, d, new Set()))
    }

    return results
}
