// Comparing strings (lexical order)
console.log('apple' == 'apple'); // true
console.log('apple' === 'apple'); // true
console.log('apple' != 'orange'); // true
console.log('apple' > 'banana'); // false (because 'a' < 'b' lexically)
console.log('apple' < 'banana'); // true

// Comparing strings with different cases
console.log('Apple' == 'apple'); // false (case-sensitive)
console.log('Apple' === 'apple'); // false (case-sensitive)
console.log('Apple' < 'apple'); // true ('A' has a lower ASCII value than 'a')

// Comparing booleans
console.log(true == 1); // true (true is coerced to 1)
console.log(false == 0); // true (false is coerced to 0)
console.log(true === 1); // false (strict comparison, no type coercion)
console.log(false === 0); // false (strict comparison, no type coercion)

// Comparing different types
console.log('5' == 5); // true (string '5' is coerced to number 5)
console.log('5' === 5); // false (strict comparison, no type coercion)
console.log(null == undefined); // true (both are considered equal in non-strict comparison)
console.log(null === undefined); // false (strict comparison, different types)
console.log(null == 0); // false (null is only equal to undefined)
console.log(undefined == 0); // false (undefined is not equal to any number)
