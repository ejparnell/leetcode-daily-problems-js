class Trie {
    constructor() {
        this.children = {}
    }

    insert(word) {
        let node = this.children
        for (const char of word) {
            if (!node[char]) node[char] = {}
            node = node[char]
        }
        node.isEnd = true
    }

    search(word) {
        let node = this.children
        for (const char of word) {
            if (!node[char]) return false
            node = node[char]
        }
        return !!node.isEnd
    }

    startsWith(prefix) {
        let node = this.children
        for (const char of prefix) {
            if (!node[char]) return false
            node = node[char]
        }
        return true
    }
}
