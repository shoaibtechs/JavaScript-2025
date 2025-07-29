// --------------------------------------------------------1. trim() ------------------------------------------


let password = "  hello ";  //In JS strings are immutable

let newPassword =  password.trim();

console.log(newPassword);



// --------------------------------------------------------2. toUpperCase ------------------------------------------


let msg1 =  "Hello Dear how are u";

console.log(msg1.toUpperCase());


// --------------------------------------------------------3. toLowerCase ------------------------------------------


let msg2 =  "Hello Dear how are u";

console.log(msg2.toLowerCase());




// --------------------------------------------------------4. indexOf() ------------------------------------------


let str = "Ilove coding ";


console.log(str.indexOf("love"));

console.log(str.indexOf("e"));






// --------------------------------------------------------5. Method Chaining ------------------------------------------



let str2 = " My name is shoiab ";

let str3 = str2.trim();

str3 = str3.toUpperCase()

console.log(str3);

// All the above code we can de with just one line with the help of method chaining 


let str4 =  " My name is shoaib ";

let str5 =  str4.trim().toUpperCase();


// Left to right execution happens in Method chaining 

console.log(str5);



// --------------------------------------------------------6. Slice  ------------------------------------------


let str6 = "Shoaib";



//Method-1

console.log(str6.slice(0,4)); //Ending number is not included 


//Method-2 


console.log(str6.slice(4)); //Start from the 4th index and return till the last 


console.log(str6.slice(0))



//Method-3



let msg = "apnacollege";

console.log(msg.slice(-1)); //  it means---->  length0g string - 1   -----> 11-1 ----> (10)


console.log(msg.slice(-3)); //  it means---->  length0g string - 1   -----> 11-3 ----> (8)





// --------------------------------------------------------7. Replace  ------------------------------------------


//only first occurence will be replaced 


let msg3  =  "I love Coding";

let msg4  = msg3.replace("love", "do")


console.log(msg3);

console.log(msg4);



// --------------------------------------------------------8. Repeat  ------------------------------------------


let msgg =  "Hello";


console.log(msgg.repeat(3));