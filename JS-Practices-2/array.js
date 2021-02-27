var friendsAge = [23, 21, 12, 53, 53, 52];
var friendsAgepop = [23, 21, 12, 53, 53, 52];

var sonaliAge = friendsAge[2];
friendsAge[2] = 32;
var position = friendsAge.indexOf(123);
friendsAge.push(345);


console.log(friendsAge[2]);
console.log(position);
console.log(friendsAge);
console.log(friendsAge.length);
friendsAgepop.pop();;
console.log(friendsAgepop);
console.log(friendsAgepop.length);

console.log("shift/unshift array");
var friendsAgeShift = [23, 21, 12, 53, 53, 52];
console.log(friendsAgeShift.length);
friendsAgeShift.shift();
console.log(friendsAgeShift);
friendsAgeShift.unshift(42, 345, 435);
console.log(friendsAgeShift);

