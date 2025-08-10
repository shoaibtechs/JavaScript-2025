let obj = {

    name : "Shoaib", 
    rollNo : 147
};


let newObj =  {...obj, marks:123};




console.log(obj);

console.log(newObj);



// Spreading the array and then  converting it into and object ;


let arr = [1,2,3,4,5];


let arrObj = {...arr}; // Index of ythe value inside an array is going to be the key 




console.log(arrObj);


// Spreading the string with an object 


let obj2 = {..."Hello"}; // The index of the each character is going to be the key 


console.log(obj2);