// ✅ Use dot notation when:
// The property name is a valid identifier (a-z, A-Z, 0–9, _, $ — and doesn't start with a number).

// The key does not have spaces or special characters.


let student1 = {
  name: "Shoaib",
  rollNo: 147
};

console.log(student1.name);     // Shoaib
console.log(student1.rollNo);   // 147




// ✅ Use bracket notation when:
// The key is not a valid identifier (like starts with a number, or has space/symbol).

// The key is dynamic (coming from a variable or user input).

// The key is a number, boolean, or any non-string value.

// You want to access keys like "first name", 1, true, null, etc.


let student2 = {
  "first name": "Shoaib",
  1: "ID One",
  true: "Yes",
  null: "No Value"
};

console.log(student2["first name"]);  // Shoaib
console.log(student2[1]);             // ID One
console.log(student2[true]);          // Yes
console.log(student2[null]);          // No Value





// 💡 Final Example:

let key = "name";
let obj = {
  name: "Ali",
  "full name": "Ali Khan",
  1: "One",
  true: "Yes"
};

console.log(obj.name);          // ✅ Ali
console.log(obj["full name"]);  // ✅ Ali Khan
console.log(obj[key]);          // ✅ Ali (because key = "name")
console.log(obj[1]);            // ✅ One
console.log(obj[true]);         // ✅ Yes
