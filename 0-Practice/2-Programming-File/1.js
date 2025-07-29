let num1 =  33;

let num2 =  26;

console.log(`The values before swapping are \n num1  = ${num1} \n num2 = ${num2}`);


num2 = num1 + num2;
num1 = num2 - num1;
num2 = num2 - num1;


console.log(`The values after swapping are \n num1 = ${num1} \n num2 = ${num2}`);
