//Constant array means that usme hum append pop or values ko change karsakte hai...but we can not do the below thing that is right
// now  possible with the 'let'


let cars =  ["mehran", "Toyota"];

let arr = [1,3,4,45];

cars =  arr;


console.log(cars);



// We can not do this with 'const'

const cars1 =  ["mehran", "Toyota"];

let arr1 = [1,3,4,45];

cars1 =  arr1; // Will ge the error because the cars1 is constant 


console.log(cars1);











