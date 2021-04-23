const Winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export const isThereAWinner = (Game) => {
    for (var i = 0; i < Winner.length; i++) {
        if (Game[Winner[i][0]] === 'O' && Game[Winner[i][1]] === 'O' && Game[Winner[i][2]] === 'O')
        return ['0', Winner[i]]
        if (Game[Winner[i][0]] === 'X' && Game[Winner[i][1]] === 'X' && Game[Winner[i][2]] === 'X')
        return ['X', Winner[i]]
    }
    return ['No', []]
    
}

