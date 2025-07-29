// AND (&&) - Returns true if both operands are true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 > 3 && 8 > 6); // true
console.log(5 > 3 && 8 < 6); // false

// OR (||) - Returns true if at least one operand is true
console.log(true || false);  // true
console.log(false || false); // false
console.log(5 > 3 || 8 < 6); // true
console.log(5 < 3 || 8 < 6); // false

// NOT (!) - Reverses the boolean value
console.log(!true);  // false
console.log(!false); // true
console.log(!(5 > 3)); // false
console.log(!(5 < 3)); // true

// Combining logical operators
console.log((5 > 3 && 8 > 6) || (5 < 3 && 8 > 6)); // true
console.log(!(5 > 3 && 8 < 6) || (5 < 3 && 8 > 6)); // true
