// --------------1. indexOf ---------------------------------------------------------------------


let arr =  ["Shoaib", "Akhtar", "Babar"];


console.log(arr.indexOf("Shoaib"));

console.log(arr.indexOf("Akhtar"));


// --------------2. includes --------------------------------------------------------------------


let arr1 =  ["Shoaib", "Akhtar", "Babar"];


console.log(arr1.includes("Shoaib"));

console.log(arr1.includes("Javed"));


// --------------3. Concat -----------------------------------------------------------------------


let names  =  ["Shoaib", "Akhtar", "Babar"];

let numbers =  [1,44,22,44];

//Orginal names and numbers arrays  will be remain same  


let fullInfo = names.concat(numbers);

console.log(fullInfo);





// --------------4. Reverse  -----------------------------------------------------------------------

let arr4 =  ["Shoaib", "Akhtar", "Babar"];

//Orginal Array4 will be reversed 

arr4.reverse();

console.log(arr4);