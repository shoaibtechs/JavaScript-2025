//----------------------------------------------------------1. Slice ---------------------------------------------







let colors =  ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];



// The whole array will be copied 
let copyColors =  colors.slice() 


console.log(colors.slice(3)); //Starting Index



console.log(colors.slice(0,2)); //Starting and Ending Index



// -----------------Negatice indexing in Slice 


let colors1 =  ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];


console.log(colors1.slice(-2)) // Last wale 2 Items ko Print kardooo

console.log(colors1.slice(4)) // Last wale 4 Items ko Print kardooo









//----------------------------------------------------------2. Splice ---------------------------------------------

// Define an array for demonstration purposes
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// Splice function: removes and/or adds elements in an array
// Syntax: array.splice(start, deleteCount, item1, item2, ..., itemN)

/* 
Parameters:
- start: Index at which to start changing the array (0-based index).
- deleteCount: Number of elements to remove starting from 'start'. If set to 0, no elements are removed.
- item1, item2, ..., itemN: (Optional) The elements to add to the array starting from the 'start' position.
*/

// Example 1: Remove 2 elements starting from index 1
let removedFruits = fruits.splice(1, 2); 
console.log("Modified Array:", fruits); // Output: ["Apple", "Orange", "Pineapple"]
console.log("Removed Elements:", removedFruits); // Output: ["Banana", "Mango"]

// Example 2: Remove 1 element from index 2 and add "Grapes" and "Watermelon" at the same position
fruits.splice(2, 1, "Grapes", "Watermelon");
console.log("Modified Array:", fruits); // Output: ["Apple", "Orange", "Grapes", "Watermelon"]

// Example 3: Add elements without removing any (deleteCount = 0)
fruits.splice(1, 0, "Strawberry", "Blueberry");
console.log("Modified Array:", fruits); // Output: ["Apple", "Strawberry", "Blueberry", "Orange", "Grapes", "Watermelon"]

// Example 4: Remove all elements from index 3 onward
fruits.splice(3);
console.log("Modified Array:", fruits); // Output: ["Apple", "Strawberry", "Blueberry"]









//---------------------------------------------3. Sort 


let cars = ["Shoaib", "Akhtar", "Babar"];

cars.sort();


console.log(cars);