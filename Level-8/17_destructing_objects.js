const student =  {

    name : "Shoaib",
    rollNo : 147,
    marks : 88,
    subject: "Python"


};


const {name , rollNo} = student;


console.log(`Name: ${name}`);
console.log(`RollNo ${rollNo}`);


// But if want to store the values of name and rollNo in separate variable then:


const{name:myName, rollNo:myRoll} =  student;


console.log(`My name is ${myName}`);
console.log(`My RollNo is ${myRoll}`);
