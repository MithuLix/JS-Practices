function doubleIt(num) {
    var result = num * 2;
    return result;
}

var first =  doubleIt(5);
var second =  doubleIt(10);
var third =  doubleIt(50);
var total = first + second + third;
console.log(first, second, third, total);

console.log("-----add-----")
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}

var sum = add(15,13);
console.log(sum);