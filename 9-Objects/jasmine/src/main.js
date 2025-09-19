// Task 1
const scoreBoard = {
    "The Best Ever" : 100000
}

// Task 2
let newPlayerName = 'Walker';
let newPlayerScore = 99000;
scoreBoard[newPlayerName] = newPlayerScore;

// Task 3
let playerToRemove = 'The Best Ever'; 
delete scoreBoard[playerToRemove]

// Task 4
let scoreToAdd = 15000
let playerNameToUpdate = 'Walker'
scoreBoard[playerNameToUpdate] += scoreToAdd

// Task 5 
let mondayBonus = 100
for(key in scoreBoard) {
    scoreBoard[key]  += mondayBonus
}
console.log(scoreBoard)