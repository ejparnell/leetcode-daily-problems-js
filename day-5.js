const reverseVowels = s => {
    const vowels = new Set('aeiouAEIOU')
    const arr = s.split('')
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        if (!vowels.has(arr[i])) i++
        else if (!vowels.has(arr[j])) j--
        else {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    return arr.join('')
}
