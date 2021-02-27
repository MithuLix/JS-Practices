console.log("-------Using for loop-------")
function factorial(n) {
var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
    var result = factorial(10);
    console.log(result);


console.log("-------Using for loop-------")
function factorial(n) {
    var i = 1;
    var num  = 1;
        while (i <= n) {
        num  = num * i;
        i++;
    }
return num;
}
var result = factorial(6);
console.log(result);

console.log("----using recursive-----")
function factorial(n) {
    if(n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var result = factorial(9);
console.log(result);