const p = new Promise((resolve, reject) => {
        const a = 12 + 11;
        if (a == 43) {
            resolve('success')
        } else {
            reject('failed')
        }
        return p;
})
console.log(p);

p.then((message) => {
    console.log('this is in the then' + message);  
}).catch((message) => {
    console.log('this is in the catch' + message);
});


