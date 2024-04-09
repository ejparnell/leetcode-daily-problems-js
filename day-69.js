const minFlips = (a, b, c) => {
    let flips = 0
    while (a || b || c) {
        const bitA = a & 1
        const bitB = b & 1
        const bitC = c & 1

        if ((bitA | bitB) !== bitC) {
            if (bitC === 0) flips += bitA + bitB
            else flips += 1
        }

        a >>= 1
        b >>= 1
        c >>= 1
    }
    return flips
}
