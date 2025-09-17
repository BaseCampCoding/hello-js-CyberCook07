// Task 1: Retrieve a Card from the Stack
let position = 3;
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getItemResult = stack[position];

// Task 2: Exchange a Card in the Stack 
let replacementCard = 19;
stack[6] = replacementCard;

// Task 3: Insert a Card at the Top of the Stack
let newCardTop = 15;
stack.unshift(15);

//Task 4: Remove a Card from the Stack
stack.splice(3,1);

//Task 5: Remove the Top Card from the Stack
stack.splice(0,1)

//Task 6: Insert a Card at the Bottom of the Stack
let newCardBottum = 67
stack.push(newCardBottum)
console.log(stack)

//Task 7: Remove a Card from the Bottom of the Stack 
stack.pop()

//Task 8: Check the Size of the Stack
let stackSize = 9;
let checkSizeOfStackResult = stackSize === stack.length;
console.log(checkSizeOfStackResult)