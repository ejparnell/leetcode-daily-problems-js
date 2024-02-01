const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false
    const count1 = new Map()
    const count2 = new Map()
    for (let char of word1) {
        count1.set(char, (count1.get(char) || 0) + 1)
    }
    for (let char of word2) {
        count2.set(char, (count2.get(char) || 0) + 1)
    }
    const keys1 = [...count1.keys()]
    const keys2 = [...count2.keys()]
    const values1 = [...count1.values()].sort((a, b) => a - b)
    const values2 = [...count2.values()].sort((a, b) => a - b)
    return keys1.sort().join('') === keys2.sort().join('') && values1.join('') === values2.join('')
}
