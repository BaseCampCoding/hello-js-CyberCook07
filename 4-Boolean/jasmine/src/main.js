knightIsAwake =false;
archerIsAwake = true;
prisonerIsAwake = true;
petDogIsPresent = false;


let canExecuteFastAttack = !knightIsAwake;
console.log('Fast Attack: ' + canExecuteFastAttack)

let canSpy = knightIsAwake || !archerIsAwake || prisonerIsAwake;
console.log('Can Spy: ' + canSpy)

let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log('canSignalPrisoner: ' + canSignalPrisoner)

let  canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake);
console.log('canFreePrisoner: ' + canFreePrisoner)