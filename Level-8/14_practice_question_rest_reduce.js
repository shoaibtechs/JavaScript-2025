// Getting the sum of the parameters using the reduce method  and rest operator 


//--------------------------Method-1 using the Normal Function-------------


function sum(... args)
{

    return args.reduce((acc, i)  => {

        return acc + i ;

    } )


}


let result1 =  sum(1,2,3,4);

console.log(`The sum of the parameters is ${result1}`);



//--------------------------Method-2 using the Arrow Function-------------   




let sum = (... args) => {

    return args.reduce((acc, i) => {

        return acc + i ;

    })


}





let result2 =  sum(1,2,3,4);

console.log(`The sum of the parameters is ${result2}`);

