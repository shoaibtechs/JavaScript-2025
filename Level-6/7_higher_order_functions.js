// A function that returns a Function


function oddEvenFactory(req)
{

    if(req ==  "odd")
    {

        return  function(n)
        {
            console.log(n%2!=0);

        }
    
        return odd;
    }

    else if( req ==  "even")
    {

        return  function(n)
        {
            console.log(n%2==0);

        }

        return even;
    
    }


    else{

        console.log("Wrong Request :(");
        
    }


}

let fun =  oddEvenFactory("even");

fun(8);
