// Minimum using the rest and the reduce method 



function findMinimum(...args)
{
        
    return args.reduce((acc, i) => {

        if(i < acc)
        {
            return i;

        }

        else {

            return acc ;

        }

    })


}



let min =  findMinimum(11,2,2,44,5);

console.log(`The minimum value is ${min}`);
