let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let i = array.length, j, temp;
while (condition) {

}(--i > 0) {
    j =  Math.floor(Math.random() * (i+1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
console.log(array);