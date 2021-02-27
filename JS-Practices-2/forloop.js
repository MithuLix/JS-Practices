const cars = ["BMW", "Volvo", "Saab", "Ford"];
const cars2 = ["Tesla", "mustang",, "mcLearn"];
const cars3 = {one : 'vugaddi', two : 'honda', three : 'mercedis'}




//for loop
for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element);
}


//forEach loop
cars2.forEach(elements2 => {
    console.log(elements2);
});



//froIn loop
for (const key in cars3) {
    if (Object.hasOwnProperty.call(cars3, key)) {
        const elements3 = key + ": " + cars3[key];
        console.log(elements3);
    }
}



//for of
for (const iterator of cars2) {
    console.log(iterator);
}


var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
var r = fruits.sort()
console.log(r);


//bitwise operators
var a = 23, b = 21, c = a << b;

console.log(c);

