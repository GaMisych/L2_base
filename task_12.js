function longest(arr, n) {
    const items = arr.map((str, index) => {
        return { str: str, index: index }
    })

    items.sort((a, b) => {
        if (b.str.length !== a.str.length) {
            return b.str.length - a.str.length
        }
        return a.index - b.index
    })
    // если результат < 0 — элемент a ставится до b
    // если результат > 0 — элемент b ставится до a
    // если результат === 0 — порядок не меняется

    return items[n - 1].str
}
