// A function that returns a Function


function oddEvenFactory(req)
{

    if(req ==  "odd")
    {

        let odd =  function(n)
        {
            console.log(n%2!=0);

        }
    
        return odd;
    }

    else if( req ==  "even")
    {

        let even =  function(n)
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

fun(3);
