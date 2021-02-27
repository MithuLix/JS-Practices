function factorial(num) {
    var fact = 1;
    for(var i = 1; i <= num; i++) {
        var fact = fact * i; 
    }
    return fact;
}
var result = factorial(5);
console.log('result =', result);