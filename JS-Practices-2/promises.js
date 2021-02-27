let myPromise = new Promise((resolve, failure) => {
    let a  = 0;
    if(a == 0) {
        resolve('success');
    }else{
       failure('failure');
    }
})

myPromise.then((message) => {
    console.log('this is then ' + message);
}).catch((message) => {
    console.log('this is in the catch ' + message);
})




//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//callback hell

const userLeft = false;
const userWatching = true;

function myPromise2() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name:'mithu',
                message: ': Thanks for watching',
            })
        }else if (userWatching) {
            reject({
                name: 'user watching cat meme',
                message: 'webDevSimplified < cat'
            })
        }else{
            resolve('Thumbs up and subscribe')
        }
    })
}


myPromise2().then((message) => {
    console.log('Success:' + message);
}).then((message) => {
    console.log('Success:' + message);
}).catch ((error) => {
    console.log(error.name + ' ' + error.message);
});







////////////////////////////////////////////////
//////////////////////////////////////////////
///////    Simplified Promises    /////////////



const recordVideo1 = new Promise((resolve, reject) => {
    resolve(' 1 Video recorded');
})

const recordVideo2 = new Promise((resolve, reject) => {
    resolve(' 2 Video recorded');
})

const recordVideo3 = new Promise((resolve, reject) => {
    resolve(' 3 Video recorded');
})

Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((message) => {
    console.log(message);
})