const add = (a,b) => a+b;

let res =  add(2,4);

console.log(`The sum is ${res}`);



//--------------------------------------------------------------------------------------------------

console.log("Question ----------------- 2 ")




const square = (a) => a * a;

console.log(`The square  is ${square(2,3)} `);



//--------------------------------------------------------------------------------------------------

console.log("Question ----------------- 3 ")



const doubleArr =  (arr) => {

    console.log(`The original array is ${arr}`);
 
    for(let i=0; i<arr.length; i++)
    {   
        arr[i] =  arr[i] * 2;

    }


    console.log(`The Modified array is ${arr}`);


}


let array =  [1,2,3,4];

doubleArr(array);