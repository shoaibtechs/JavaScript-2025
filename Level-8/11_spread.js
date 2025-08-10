let arr = [1,3,5,6,7];


console.log(...arr);


//2. Spread opeartor with a string 



console.log("Shoaib");

console.log(..."Shoaib"); // ek ek characater to individualy print karega ye..Just like k ye characters print kar raha hai 



//3. Spread with array Literals 


let arr2 = [1,2,34,5,6,78];


let newArr = [...arr2, 555,999];


console.log(`The new array is ${newArr}`);



let arr3 =  [..."Hello"];

console.log(arr3);



let odd = [1,3,5];

let even =  [2,4,6];


let evenOdd =  [...odd, ...even];


console.log(evenOdd);



