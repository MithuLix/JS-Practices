  var arr = [23, 234, 22, 24, 223, 2324];
  var bArr = arr.map(test);
  function test(x) {
      return x * 10;
  }
  console.log(bArr);

  //array filter
  function test2(y) {
      return y >= 100;
  }
  var arr = [23, 234, 22, 24, 2324];
  var bArr = arr.filter(test2);
  console.log(bArr);

  function timesFive(num) {
    return num - 1; 
}
console.log(timesFive(6));


function timesFive5(num) {
    return num * 5; 
}
console.log(timesFive5(5));


function timesFive2(num) {
    return num + 1; 
}
console.log(timesFive2(9));