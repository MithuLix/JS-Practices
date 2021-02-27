// problem solving assignment.

// assignment-1. method 1----------
console.log("---feetToMile > 1st Method---");
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(15000);
console.log(result);


// assignment-1. method 2
console.log("---feetToMile > 2nd Method---");
function feetToMile(feet) {
    if(feet == 0) {
        console.log("you entered an empty number");
    }
    else if(feet < 0) {
        console.log("Distange can't be Negative");
    }
    else {
        var mile = feet / 5280;
    }
    return mile;
}
var result = feetToMile(15000);
console.log(result);

// --------assignment-1. end---------




// assignment-2.------------
console.log("---woodCalculator---");
function woodCalculator(chair, table, bed) {
    if(chair < 0 || table < 0 || bed < 0) {
        console.log("Furniture number can't be negative") 
    }
    else {
        var woodForChair = chair * 1;
        var woodForTable= table * 3;
        var woodForBed = bed * 5;
        var total = woodForChair + woodForTable + woodForBed;
    }
    return total;
}
var totalWood = woodCalculator(14, 5, 15);
console.log(totalWood,  "child production going on");




//--------------- assignment-3.-------------
function brickCalculator(BuildingSize) {
    var firstToTen = 15;
    var elevenToTwenty = 12;
    var twentyOneToAll = 10;

    
    if (BuildingSize < 0 || BuildingSize == 0) {
        console.log("Building Size cannot be negative or zero");
    } else {
        if (BuildingSize <= 10) {
            firstToTen = firstToTen * BuildingSize;
            var totalBricks = firstToTen * 1000;
        } else if (BuildingSize <= 20) {
            firstToTen = firstToTen * 10;
            elevenToTwenty = BuildingSize - 10;
            BuildingSize = firstToTen + (elevenToTwenty * 12);
            var totalBricks = BuildingSize * 1000;
        } else {
            firstToTen = firstToTen * 10;
            elevenToTwenty = elevenToTwenty * 10;
            twentyOneToAll = BuildingSize - 20;
            BuildingSize = firstToTen + elevenToTwenty + (twentyOneToAll * 10);
            var totalBricks = BuildingSize * 1000;
        }
    }
    return totalBricks;
}

var buildingBricks = brickCalculator(18);
console.log(buildingBricks);






// assignment-4.-------------------
console.log("---tinyFriend---");
function tinyFriend(friend) {
    var max  = friend[0];
    for(var i = 0; i < friend.length; i++){
        var element = friend[0];
        if(element < max) {
            max = element;
        }
    }
    return max;
}
var friend = [345, 100, 342, 242, 463, 123];
var result = tinyFriend(friend);
console.log(result);