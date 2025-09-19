// Task 1
let birdsPerDay = [1,2,5,4, 6, 7, 3, 2, 4];
let total = 0;
for (let i = 0; i < birdsPerDay.length; i++ ){
    total = birdsPerDay[i];
}

// Task 2
let week = 1;
let daysPerWeek = 7;
let weekStart = (week - 1) * daysPerWeek;
let weekEnd = week * daysPerWeek;
let weekTotal = 0;
for (let i = weekStart; i < weekEnd && i < birdsPerDay.length; i++){
    weekTotal += birdsPerDay[i]
}
console.log(weekTotal)
// Task 3
for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1
}
console.log(birdsPerDay)