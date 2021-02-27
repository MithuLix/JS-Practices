var chaBiscuit = 34;
if ( chaBiscuit >= 30){
    console.log("Give me only cha");
} 
else {
    console.log("I won't eat");
}

var chaBiscuit = 34;
if ( chaBiscuit !=34){
    console.log("Give me only cha");
} 
else {
    console.log("I won't eat");
}

var jobPaiso = true;
var savingsAmount = 500000;
if (jobPaiso == true && savingsAmount > 200000) {
    console.log("Aso tomar patri khuji")
}
else(
    console.log("tor kopale biya nai")
)

// ----------------
var jobDone = true;
var salary = 30000;
if (jobDone == true && salary > 200000) {
    console.log("Buy a new home");
}
else if (jobDone == true){
    console.log("buy a smartphone");
}
else {
    console.log("Buy a new bike");
}

console.log( "---------while-loop-----");
var num = 2;
while (num < 5){
    console.log(num);
    num++;
}

console.log("-----for loop----")
for(var a = 34; a <= 35; a++){
    console.log(a);
}

console.log("-----switch---")
var day;
switch ( new Date().getDay())  {
    case 0:
        day =  "saturday";
    break;
    case 1:
        day =  "sunday";
    break;
    case 2:
        day =  "monday";
    break;
    case 3:
        day =  "tuesday";
    break;
    case 4:
        day =  "wednesday";
    break;
    case 5:
        day =  "thrusday";
    break;
    case 6:
        day =  "friday";
    break;
}
console.log("today is " + day);