// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){

    //refactored
    return fare => (fare * multiplier);

    // return function(fare){
    //     return fare * multiplier;
    // }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverOrder = returnFirstTwoDrivers()){
    
    return driverOrder();
}
