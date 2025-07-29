// 1. Normal Object


let student =  {

    name : "Shoaib",
    id : 147,
    marks : 98



};


console.log(student["name"]);

console.log(student.name);



// 2. object with a array 



student = {
    name : "Shoaib", 
    id : 14238,
    course : ["PF", "OOP","DS"]

};



console.log(student["course"][0]);


// 3. count the properties of the objetcs 


let siz  =  Object.keys(student).length;




// 4. Add the new property inside the object 


student["gender"] = "Male";


console.log(student["gender"]);


//5. Iterate throug the Objects 


for(let i in student)
{
    console.log(i, student[i]);

}



// 6. Delete the property 


delete student["marks"];
