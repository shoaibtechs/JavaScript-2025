const classInfo =  {


    shoaib: {
        
        grade : "A",
        city: "Dadu",
        marks : 100

    }, 


    jawad : {

        grade :"A+",
        city : "Gujjar",
        marks :  100

    },


    farhan: {

        grade : "A+", 
        city : "Bahawalpur",
        marks : 112

    } 

};

console.log(classInfo[shoaib][grade]);

// Iterating throug the nested array


for(let i in classInfo)
{

    console.log("Student name : ", i);


    for(let j in classInfo[i])
    {
        console.log(j, classInfo[i][j]);

    }

}