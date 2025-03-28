const compress = chars => {
    let index = 0
    let i = 0
    while (i < chars.length) {
        let j = i
        while (j < chars.length && chars[j] === chars[i]) j++
        chars[index++] = chars[i]
        if (j - i > 1) {
            const count = (j - i).toString()
            for (let k = 0; k < count.length; k++) {
                chars[index++] = count[k]
            }
        }
        i = j
    }
    return index
}
