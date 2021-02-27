
async function mithu() {
    console.log("this is Asynchronous");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("users resolved");
    
    return users;

    // return 'mithu'
}

console.log("Hi! i'm mohaiminul islam");
let a = mithu();
console.log(a);
console.log("FetchApi, come after me");
a.then(data => console.log(data))
