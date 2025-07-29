const classInfo = [

    {
        name : "Shoaib",
        id : 147, 
        marks : 100

    }, 


    {
        name :  "Jawad",
        id : 123,
        marks : 109

    },


    {
        name : "Farhan",
        id : 143,
        marks : 290

    }

];


// console.log(classInfo[0]["name"]);



for(let i in classInfo)
{   
    for(let j in classInfo[i])
    {
        console.log(j, classInfo[i][j]);

    }

}
