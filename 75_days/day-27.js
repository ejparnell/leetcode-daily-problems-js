class RecentCounter {
    constructor() {
        this.requests = []
    }

    ping(t) {
        this.requests.push(t)
        while (this.requests[0] < t - 3000) {
            this.requests.shift()
        }
        return this.requests.length
    }
}
