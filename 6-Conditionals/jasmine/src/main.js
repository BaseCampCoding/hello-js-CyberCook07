// Task 1
let kind = 'Truck';
let needsLicenseResult = true;
if (kind === 'car' || kind === 'truck'){
    needsLicenseResult = true
}
else{
    needsLicenseResult = false
}
// Task 2
let option1 = 'Ford';
let option2 = 'Chevy';
if (option1 > option2){
    chooseVehicleResult = option1 + ' is clearly a better choice '
} 
else{
        chooseVehicleResult = option2 + ' is clearly the better choice '
    };
// Task 3

let originalPrice = 15000;
let age = 1;
    if (age < 3){
        calculateResellPriceResult = originalPrice * .8
    } else if (age > 10){
        calculateResellPriceResult = originalPrice * .5
    } else{
        calculateResellPriceResult = originalPrice * .7
    }

console.log(calculateResellPriceResult)