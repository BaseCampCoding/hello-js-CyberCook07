knightIsAwake = true;
archerIsAwake = false;
prisonerIsAwake = true;
petDogIsPresent = true;


let canExecuteFastAttack = !knightIsAwake;

let canSpy = knightIsAwake || !archerIsAwake || prisonerIsAwake;

let canSignalPrisoner = prisonerIsAwake && archerIsAwake;

let  canFreePrisoner = petDogIsPresent && archerIsAwake || !petDogIsPresent && !knightIsAwake && archerIsAwake;