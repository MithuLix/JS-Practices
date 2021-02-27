const a = 232, b = 2456, c = a + b;

    setTimeout(() => {
        console.log(c);
    }, 1500);


    // fetch('/').then( () => {
    //     console.log('Fetch');
    // })

console.log(a);
console.log(b);


const fun2 = () => {
    console.log('fun2 started.');
    setTimeout( () => {
        console.log("this is asynchronous function");
    }, 2452)
}

const fun1 = () => {
    console.log('fun1 strated');
    fun2();
    console.log('fun1 ended. "this is synchronous function"');
}

fun1();



