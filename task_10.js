function bingo(ticket, win){
    let miniWins = 0

    for (let i = 0; i < ticket.length; i++) {
        const [str, code] = ticket[i]

        for (let j = 0; j < str.length; j++) {
            if (str.charCodeAt(j) === code) {
                miniWins++
                break
            }
        }
    }

    if (miniWins >= win) {
        return 'Winner!'
    } else {
        return 'Loser!'
    }
}
