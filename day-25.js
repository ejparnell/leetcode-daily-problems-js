const asteroidCollision = asteroids => {
    const stack = []
    for (let asteroid of asteroids) {
        while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
            const top = stack.pop()
            if (top === -asteroid) asteroid = 0
            else if (top > -asteroid) {
                asteroid = top
                stack.push(top)
                break
            }
        }
        if (asteroid !== 0) stack.push(asteroid)
    }
    return stack
}
