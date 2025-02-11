/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''

    let prefix = strs[0]

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            console.log(prefix)
            prefix = prefix.slice(0, prefix.length - 1)
            if (prefix === '') return ''
        }
    }
    return prefix
};

var threeSum = function (nums) {
    nums =  nums.sort((a, b) => a - b)

    const results = []
    for (let i = 0; i <= nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left + 1]) {
                    left += 1
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right -= 1
                }

                left += 1
                right -= 1
            } else if (sum < 0) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return results
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let closestSum = Infinity

    for (let i = 0; i <= nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right]

            if (currentSum === target) {
                return currentSum
            }

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum
            }

            if (currentSum < target) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return closestSum
};