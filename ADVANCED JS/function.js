
function evenify_all(array) {
    for (let i = 0; i < array.length; i++) {
        const result = array[i];
        if (result % 2 == 0) {
            console.log(result, ': even number');
        }
        else{
            console.log(result * 2, ': is odd number');
        }
    }
}

friends_age = [12, 19, 13, 16, 14, 17];
evenify_all(friends_age);

nums = [1, 32, 23, 43, 54, 23];
evenify_all(nums);