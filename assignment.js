// https://github.com/ahmmedforhad/My-third-assignment

// kilometerToMeter

/** This Function is declared to convert any Kilometer input to meter. 
    This function also convert any string value to integer and any negative value to positive.*/ 

function kilometerToMeter(input){
    var result = Math.abs(input * 1000);    
    return result;
}
var output = kilometerToMeter('-77');
console.log('Your answer is :',output,'m');


//budgetCalculator

/** This function is declare to computing total budget for buying three units, In here
   three units are Watch,Phone and Laptop.*/

function budgetCalculator(watchUnit,phoneUnit,laptopUnit){
    let costOfWatch = watchUnit * 50;
    let costOfPhone = phoneUnit * 100;
    let costOfLaptop = laptopUnit * 500;
    var totalCost = costOfWatch + costOfPhone + costOfLaptop;
    return totalCost;
}
var result = budgetCalculator(8,5,2);
console.log(result);

//hotelCost

/** This function is delared to calculte the cost of staying in a hotel; where for first 
    ten days hotel cost is tk 100, next 10 to days cost is tk 80 and for remaining days
    cost is tk 50.*/

function hotelCost(totalDays){

    if (totalDays <= 10){
        var totalCost = totalDays * 100;
    }
    else if (totalDays <= 20){
        var costForOneToTenDays = 10 * 100;
        var remaining = totalDays - 10;
        var costForRemainingDays = remaining * 80;
        var totalCost = costForOneToTenDays + costForRemainingDays;
    }
    else{
        var costForOneToTenDays = 10 * 100;
        var costForElevenToTwentyDays = 10 * 80;
        var remaining = totalDays - 20;
        var costForRemainingDays = remaining * 50;
        var totalCost = costForOneToTenDays + costForElevenToTwentyDays + costForRemainingDays;
    }
    return totalCost;
}
var result = hotelCost(36);
console.log(result);


// megaFriend

/** This function is declared to give biggest name from an array or a number of name. */


function megaFriend(nameList) {
    var biggestName = "";
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i].length > biggestName.length) {
            biggestName = nameList[i]
        }
    }
    return biggestName;
}
var nameList = ['Sabah','Nusaiba','Israt','Forhad','Fahad','Efat'];
var result = megaFriend(nameList);
console.log(result);