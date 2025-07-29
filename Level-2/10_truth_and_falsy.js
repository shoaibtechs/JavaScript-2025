// Falsy values
console.log(Boolean(false));       // false
console.log(Boolean(0));           // false
console.log(Boolean(-0));          // false
console.log(Boolean(0n));          // false (BigInt zero)
console.log(Boolean(""));          // false (empty string)
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false

// Truthy values
console.log(Boolean(true));        // true
console.log(Boolean(1));           // true
console.log(Boolean(-1));          // true
console.log(Boolean(0.1));         // true
console.log(Boolean("hello"));     // true (non-empty string)
console.log(Boolean("0"));         // true (non-empty string, even though it represents zero)
console.log(Boolean("false"));     // true (non-empty string)
console.log(Boolean({}));          // true (an empty object)
console.log(Boolean([]));          // true (an empty array)
console.log(Boolean(function(){}));// true (a function)
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true

// Examples in conditions
if (1) {
    console.log("1 is truthy");
}

if (0) {
    console.log("This won't run because 0 is falsy");
} else {
    console.log("0 is falsy");
}

if ("hello") {
    console.log("\"hello\" is truthy");
}

if ("") {
    console.log("This won't run because \"\" is falsy");
} else {
    console.log("\"\" is falsy");
}
