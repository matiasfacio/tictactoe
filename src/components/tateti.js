const NewGame = [
    'X','O','O',
    'X','','O',
    'O','O','X'
]

const Winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 0, 6]
]

const isThereAWinner = (Game) => {
    let WinnerIs = 'No';
    for (var i = 0; i < Winner.length; i++) {
        if (Game[Winner[i][0]] == 'O' && Game[Winner[i][1]] == 'O' && Game[Winner[i][2]] == 'O')
        WinnerIs = 'O'
        if (Game[Winner[i][0]] == 'X' && Game[Winner[i][1]] == 'X' && Game[Winner[i][2]] == 'X')
        WinnerIs = 'X'
    }
    return WinnerIs
}

console.log(isThereAWinner(NewGame));