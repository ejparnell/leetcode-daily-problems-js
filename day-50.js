class SmallestInfiniteSet {
    constructor() {
        this.set = new Set()
        this.nextSmallest = 1
    }

    popSmallest() {
        while (this.set.has(this.nextSmallest)) this.nextSmallest++
        this.set.add(this.nextSmallest)
        return this.nextSmallest++
    }

    addBack(num) {
        if (this.set.has(num)) this.set.delete(num)
        if (num < this.nextSmallest) this.nextSmallest = num
    }
}
