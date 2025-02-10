const maxArea = height => {
    let left = 0
    let right = height.length - 1
    let maxWater = 0
    while (left < right) {
        const width = right - left
        const currentArea = Math.min(height[left], height[right]) * width
        maxWater = Math.max(maxWater, currentArea)
        if (height[left] < height[right]) left++
        else right--
    }
    return maxWater
}
