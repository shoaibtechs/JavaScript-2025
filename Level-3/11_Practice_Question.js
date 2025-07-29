// Task:
// Write a function displayUserInfo(user) that prints the following:

// makefile
// Copy
// Edit
// Name: Shoaib Akhtar
// Email: shoaib@example.com
// Role: Normal User
// Skills: HTML, CSS, JavaScript








let user =  {

    name : "Shoaib Akhtar ",
    email: "shoaibbabar524@gmail.com",
    isAdmin: true,
    skills: ["HTML", "CSS", "JavaScript"]

};


function displayInfo(obj)
{
    for(let i in obj)
    {
        console.log(i, obj[i]);

    }


}



displayInfo(user);