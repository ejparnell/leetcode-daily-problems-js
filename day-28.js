const predictPartyVictory = senate => {
    const radiantQueue = []
    const direQueue = []
    const n = senate.length

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') radiantQueue.push(i)
        else direQueue.push(i)
    }

    while (radiantQueue.length && direQueue.length) {
        const rIndex = radiantQueue.shift()
        const dIndex = direQueue.shift()
        if (rIndex < dIndex) radiantQueue.push(rIndex + n)
        else direQueue.push(dIndex + n)
    }

    return radiantQueue.length ? 'Radiant' : 'Dire'
}
