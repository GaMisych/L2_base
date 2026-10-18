function expandedForm(num) {
    const str = num.toString()
    const result = []

    for (let i = 0; i < str.length; i++)
    {
        if (str[i] === '0') continue

        result.push(str[i] + '0'.repeat(str.length - 1 - i))
    }
    return result.join(' + ')

}
