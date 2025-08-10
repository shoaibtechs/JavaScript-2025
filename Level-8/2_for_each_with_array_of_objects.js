let arr =  [
    
    {
        name:"Shoaib",
        age : 23

    }, 
    
    
    {
        name:"jawad",
        age : 21


    }, 
    
    
    {

        name: "Fawad",
        age : 76

    }


];


// Printng the all objects inside an array 

arr.forEach( (obj) => {

    console.log(obj);


});



//Prinitng the names of the stduents inside an array of objects 



arr.forEach((obj)=>{

    console.log(obj.name);

});


