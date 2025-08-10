let arr =  [1,2,3,4,5];

let sum =  arr.reduce((acc, i) =>{

    return acc + i;


});


console.log(`The sum of elements inside the array is ${sum}`);