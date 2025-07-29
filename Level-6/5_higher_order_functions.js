// Takes the Fucntion as an Argument 



function multipleGreet(func,name,n)
{
    for(let i=0; i<n; i++)
    {
        func(name);

    }


}


function greet(name)
{
    console.log(`Hello, ${name}`);

}


multipleGreet(greet,"Shoaib",6);