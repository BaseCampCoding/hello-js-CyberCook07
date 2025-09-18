// Task 1: Retrieve a Card from the Stack
let position = 3;
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getItemResult = stack[position];

// Task 2: Exchange a Card in the Stack 
position = 6
let replacementCard = 19;
stack[position] = replacementCard;

// Task 3: Insert a Card at the Top of the Stack
let newCardTop = 15;
stack.unshift(15);

//Task 4: Remove a Card from the Stack
position = 8
stack.splice(position,1);

//Task 5: Remove the Top Card from the Stack
stack.shift()

//Task 6: Insert a Card at the Bottom of the Stack
let newCardBottom = 67
stack.push(newCardBottom)
console.log(stack)

//Task 7: Remove a Card from the Bottom of the Stack 
stack.pop()

//Task 8: Check the Size of the Stack
let stackSize = 9;
let checkSizeOfStackResult = stackSize === stack.length;
console.log(checkSizeOfStackResult)