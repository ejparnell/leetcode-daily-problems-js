const maxVowels = (s, k) => {
    const vowels = new Set('aeiou')
    let count = 0
    let maxCount = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) count++
        if (i >= k && vowels.has(s[i - k])) count--
        maxCount = Math.max(maxCount, count)
    }
    return maxCount
}
