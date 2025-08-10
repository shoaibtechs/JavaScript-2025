// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.



// Step by step Explaination:

// Original array = [1, 2, 3]

// Baaki arguments = 4, 5, 6

// Unko double karo → 8, 10, 12

// Original + doubled values ko merge karo → [1, 2, 3, 8, 10, 12]



const doubleAndReturnArgs = (arr, ...args) => {

    let newArr =  [...arr]; // Original arr will not gonna change 

    args.forEach((i) =>{

        newArr.push(i*2);

    });

    return newArr;

}



let arr =  [1,2,3];

let newArr =  doubleAndReturnArgs(arr, 4,5,6);

console.log(`New Array: ${newArr}`);