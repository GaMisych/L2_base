function primeFactors(n) {
    let result = ''
    let d = 2

    while (d * d <= n) {
        let count = 0

        while (n % d === 0) {
            count++
            n = n / d
        }

        if (count > 0) {
            if (count === 1) {
                result += `(${d})`
            }
            else {
                result += `(${d}**${count})`
            }
        }

        d++
    }
    if (n > 1) {
        result += `(${n})`
    }

    return result
}