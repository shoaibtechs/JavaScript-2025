const classInfo =  {

    shoaib : {

        id :147,
        section : "B",
        marks : 88
    
    },


    jawad : {

        id: 123,
        section: "A",
        marks : 98

    },


   farhan :  {

        id : 786,
        section: "D",
        marks : 96

   }


};



// console.log(classInfo["shoaib"]["id"]);
for(let i in classInfo)
{
    console.log("Stduent Name: ", i)
    {

        for(let j in classInfo[i])
        {
            console.log(j, classInfo[i][j]);

        }

    }

}