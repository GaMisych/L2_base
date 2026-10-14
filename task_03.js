function whatCentury(year)
{
    year = Number(year)

    let century = Math.ceil(Number(year) / 100)

    if ([11, 12, 13].includes(century)) return `${century}th`

    switch (century % 10){
        case 1:
            return `${century}st`
        case 2:
            return `${century}nd`
        case 3:
            return `${century}rd`
        default:
            return `${century}th`
    }
}
