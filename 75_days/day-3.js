const kidsWithCandies = (candies, extraCandies) => {
    const maxCandies = Math.max(...candies)
    return candies.map(c => c + extraCandies >= maxCandies)
}
