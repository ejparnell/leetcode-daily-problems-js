const isSubsequence = (s, t) => {
    let i = 0
    for (let char of t) {
        if (i < s.length && s[i] === char) i++
    }
    return i === s.length
}
