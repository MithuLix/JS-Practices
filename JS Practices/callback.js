const funA = () => {
    setTimeout(function () {
        console.log(`welcome FunA`);
    }, 3000);

}

const funB = () => {
    console.log(`welcome FunB`);
}

funA();
funB();


const perOne = (friend, callback) => {
        console.log(`Hi, are u there? what are u doing?I'm doing ${friend} class.` )
        callback();
}

const perTwo = () => {
    console.log(`Ok. then all right. i'll come later`);
} 

perOne('mithu', perTwo);