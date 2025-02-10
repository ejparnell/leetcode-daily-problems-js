const gcdOfStrings = (str1, str2) => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    return str1 + str2 === str2 + str1 ? str1.slice(0, gcd(str1.length, str2.length)) : ''
}
