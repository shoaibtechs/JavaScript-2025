const mergeObject = (obj1, obj2 ) => obj3 = {...obj1, ...obj2};


const display = (obj) => {

    for(let i in obj)
    {
        console.log(i, obj[i]);

    }


}





obj1 = {

    name : "Shoaib", 
    id : 147

};

obj2 = {

    marks:88,
    course: "PF"


};


let obj = mergeObject(obj1, obj2);


display(obj);