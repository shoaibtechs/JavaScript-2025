// 4. Create URL Slug from Title
// Input: "Learn JavaScript in 30 Days!"
// Output: "learn-javascript-in-30-days"
// Use: toLowerCase(), replace(), split(), join().



let str =  prompt("Enter the str ");

let url =  str.toLowerCase().replace(" ", "-");

console.log(url);