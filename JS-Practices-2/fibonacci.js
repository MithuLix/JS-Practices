// var fibo = fibo[2-1] + [2-2];
// var fibo = fibo[3-1] + [3-2];
// var fibo = fibo[4-1] + [4-2];
// var fibo = fibo[5-1] + [5-2];
// var fibo = fibo[n-1] + [n-2];
// var fibo = fibo[i-1] + [i-2];

function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo; 
}
var result = fibonacci(12);
console.log(result);


console.log("--recursive--");
function fibonacci(n) {
        if (n == 0){
        return 0;
    }
        if(n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n -2);
    }
}
var result = fibonacci(10);
console.log(result);

console.log("--recursiveSeries--");
function fibonacci(n) {
    if(n == 0) {
    return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        var fibo =  fibonacci(n - 1);
        var nextElement = fibo[n-1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(22);
console.log(result);