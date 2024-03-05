const findCircleNum = isConnected => {
    const visited = new Set()
    let provinces = 0

    const dfs = city => {
        for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited.has(neighbor)) {
                visited.add(neighbor)
                dfs(neighbor)
            }
        }
    }

    for (let city = 0; city < isConnected.length; city++) {
        if (!visited.has(city)) {
            provinces++
            visited.add(city)
            dfs(city)
        }
    }

    return provinces
}
