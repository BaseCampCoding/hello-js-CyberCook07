// Task 1
let line = "Stand so high Huge hooves too Impatiently waits for Reins and harness Eager to leave";
const frontDoorLetter = line[0]; 

// Task 2
let frontDoorWord = "SHIRE"
let frontDoorPassword = frontDoorWord[0].toUpperCase() + frontDoorWord.slice(1,5).toLowerCase()
// Task 3
let lineWithWhiteSpace = 'Reins and harness'
let removeWhiteSpace = lineWithWhiteSpace.trim()
let backDoorLetter = removeWhiteSpace[removeWhiteSpace.length - 1]
// Task 4
let backDoorPassword = `Hor${backDoorLetter}e` + `, please`
console.log(backDoorPassword)