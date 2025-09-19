// Task 1
let visitorName = 'Walker'
let visitorAge = 18
let visitorTicketId = 'B5'

let visitor = {
    'name' : visitorName,
    'age' : visitorAge,
    'ticketId' : visitorTicketId
}

// Task 2
visitor.ticketId = null

// Task 3
let tickets = {
    'B5': 'Walker', 
    'F15' : null, 
}
let ticketIdToCheck = 'F15'
let ticketStatusResult;
if (!tickets.hasOwnProperty(ticketIdToCheck)){
    ticketStatusResult = 'unknown ticket id';
}
else if (tickets[ticketIdToCheck] === null) {
    ticketStatusResult = 'not sold'
}
else{
    ticketStatusResult = `sold to ${visitorName}`
}
// Task 4

let simpleTicketStatusResult;
if (tickets[ticketIdToCheck]){
    simpleTicketStatusResult = visitorName
}
else{
    simpleTicketStatusResult = 'invalid ticket !!!'
}
// Task 5
let visitorWithGtc = {
    gtc: {
        version: 'v1.0.0',
    }
};
let gtcVersion;
if (visitorWithGtc?.gtc && visitorWithGtc?.gtc?.version === 'v1.0.0'){
    gtcVersion = visitorWithGtc?.gtc?.version
}
console.log(version)