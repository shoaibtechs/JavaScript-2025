// "Every" is like "And" Logical Operator: Ek bhi condition false then overall result will be false



let res1 = [2,4,6,8].every((i) =>{

    return i%2 ==0;



});


console.log(`Is all the elements are are even inside an array1 ? ${res1}`);



let res2 = [2,4,6,8,9].every((i) =>{

    return i%2 ==0;



});


console.log(`Is all the elements are are even inside an array2 ? ${res2}`);