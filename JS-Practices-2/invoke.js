(function () {
    console.log("my favourite Number is 34");
})();





(favNumver = function(num = 3453) {
    console.log("my favourite Number is " + num);
})();

favNumver(3456);





var a = 3;
(function() {
    var a = 32;
    console.log(a);
})();
console.log(a);




let b = 3;
{
    let a = 32;
    console.log(b);
}
console.log(b);

