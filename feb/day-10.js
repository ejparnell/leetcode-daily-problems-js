var isPalindrome = function(x) {
    if (typeof x !== 'number') false

    const reverse = x.toString().split('').reverse().join('')

    return parseInt(reverse) === x 
}