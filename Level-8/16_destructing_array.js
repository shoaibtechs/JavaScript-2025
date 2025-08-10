let names =  ["Shoaib", "jawad", 'Fawad', "Haris", "Babar", "Rizwan"];


let [n1,n2] =  names;


console.log(`Name1: ${n1}\nName2: ${n2} `);



// If we want to collect the remaining values 



let [winner, runnerUp, ...rem] = names;


console.log(typeof(names));



// Below code will clear the confusion  of rest operator and spread operator 

// REST operator (collect karta hai)
let arr = [1, 2, 3, 4, 5];
let [a, b, ...rest] = arr;
console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // [3, 4, 5]

// SPREAD operator (spread karta hai)
let nums = [3, 4, 5];
let newArr = [1, 2, ...nums, 6];
console.log(newArr); // [1, 2, 3, 4, 5, 6]
