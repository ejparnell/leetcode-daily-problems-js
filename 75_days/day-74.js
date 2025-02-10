const dailyTemperatures = temperatures => {
    const n = temperatures.length
    const answer = Array(n).fill(0)
    const stack = []

    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()
            answer[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }

    return answer
}
