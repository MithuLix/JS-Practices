
var marks  = [23, 35, 35, 95, 42, 76, 45,86];
var max = marks[0];
for(var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element > max) {
        max = element;
    }
}
console.log("Highgest vlaue is: ", max);
  

console.log("--sum method--");
function getArraySum(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        var element = numbers[i]
        sum = sum + element;
    }
    return sum;
}
var numbers  = [23, 35, 35, 95, 42, 76, 45,86];
var result = getArraySum(numbers);
console.log("total numbers is: ", result);