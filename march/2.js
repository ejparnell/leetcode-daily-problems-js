/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) return false
    const stack = []
    const opening = ['(', '{', '[']
    const closing = [')', '}', ']']
    let isValid = true
    for (let i = 0; i < s.length; i++) {
        if (opening.includes(s[i])) {
            stack.push(s[i])
        }
        if (closing.includes(s[i])) {
            if (s[i] === closing[0]) {
                if (stack[stack.length - 1] === opening[0]) {
                    stack.pop()
                } else {
                    isValid = false
                }
            } else if (s[i] === closing[1]) {
                if (stack[stack.length - 1] === opening[1]) {
                    stack.pop()
                } else {
                    isValid = false
                }
            } else if (s[i] === closing[2]) {
                if (stack[stack.length - 1] === opening[2]) {
                    stack.pop()
                } else {
                    isValid = false
                }
            }
        }
    }
    return isValid && stack.length === 0
};