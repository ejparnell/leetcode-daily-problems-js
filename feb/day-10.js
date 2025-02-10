var isPalindrome = function(x) {
    if (typeof x !== 'number') false

    const reverse = x.toString().split('').reverse().join('')

    return parseInt(reverse) === x 
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    
    let count = 0
    
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && values[s[i]] < values[s[i + 1]]) {
            count -= values[s[i]]
        } else {
            count += values[s[i]]
        }
    }
    
    return count
}
