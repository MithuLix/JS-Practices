
function array() {
    fruits.sort();
    return fruits;
}
var fruits = ["Jackfruit", "Apple", "banana", "Mango"];
console.log(fruits);



// reverse array method
function reverseArray() {
    fruits.reverse();
    return fruits;
}
const result = reverseArray(["Jackfruit", "Apple", "banana", "Mango"]);
console.log(result);



// array in ascending order
var numbers = [12, 2, 43, 21, 65, 42, 42, 23];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);



// Sorting an Array in Random Order
const RandomOrder = [12, 2, 43, 21, 65, 42, 42, 23];
RandomOrder.sort(function(a, b) {
    return 0.5 - Math.random();
})
console.log(RandomOrder);





