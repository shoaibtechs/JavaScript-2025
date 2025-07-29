function add(num1 , num2 )
{
    return num1 + num2 ;

}


function sub(num1, num2)
{
        return num1 - num2 ;
}


function mul(num1, num2)
{
        return num1 * num2 ;
}


function div(num1 , num2 )
{
    
    if(num2 == 0)
    {
            return "zero";
    }
    
    else{

        return num1 / num2 ;
    }

}


function menu()

{

  while(true)
  {

    let user =  prompt("Press 1 for Addition \n Press 2 for subtraction \n Press 3 for multiplication \n Press 4 for Division \n Press 5 to exit");


    if(user == 5)
    {
        break;

    }



    let num1 =  Number(prompt("Enter the first number "));
    let num2 = Number(prompt("Enter the second number "));




    if(user ==  1)
    {
           let sum =   add(num1, num2);
           console.log(`The addition of ${num1} and ${num2 } is ${sum}`);
         
    }

    else if(user == 2)
    {

            let diff =   sub(num1, num2);
            console.log(`The difference of ${num1} and ${num2 } is ${diff}`);
         
    }

    else if(user == 3)
    {
            let mult =   mul(num1, num2);
            console.log(`The multiplication of ${num1} and ${num2 } is ${mult}`);

    }

    else if(user == 4)
    {
        let divi =   div(num1, num2);

        if(divi ==  "zero")
        {
            console.log("Zero Division Error");

        }

        else
        {
            console.log(`The division of ${num1} and ${num2 } is ${divi}`);

        }

        
    }


  

    else{
        console.log("Wrong Input");

    }



  }
}



menu();