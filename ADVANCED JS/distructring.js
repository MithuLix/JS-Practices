//assign variable from object
let voxel = {x:34.34, y:12.2, z:45};
const{x, y, z} = voxel;
console.log(x);
const{x:a, y:b, z:c} = voxel; 
console.log(b);


//assign variable from nested object
const nest = {
   start: {x:3234.34, y:322.2, z:645},
   end: {x:394.34, y:386.2, z:985}
}
const{ start : { x:startX, y:startY}} = nest;
console.log(startX);



//assign variable from Arrays
const[q,,,, w] = [1, 23, 4, 5, 64]
console.log((q, w));


//rest Operators to reassign Array Elements
const[r, e, ...rest] = [1, 23, 4, 5, 64];
console.log(r, e);
console.log(rest);


//Pass an object as a function Parameters
const profileUpdate = ({name, age, nationality, location}) => {
    
    //do something with teses variables
}