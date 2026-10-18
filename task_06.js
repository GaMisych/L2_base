function toWeirdCase(string){
    const words = string.split(' ')
    const resultWords = []

    for (let i = 0; i < words.length; i++)
    {
        let newWord = ''

        for (let j = 0; j < words[i].length; j++)
        {
            if (j % 2 === 0) {
                newWord += words[i][j].toUpperCase()
            } else {
                newWord += words[i][j].toLowerCase()
            }
        }
        resultWords.push(newWord)
    }

    return resultWords.join(' ')
}
