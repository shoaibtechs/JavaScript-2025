let customer_info = prompt("Are u a new Customer ?");

let purchases =  prompt("How manu purchases you have made ?");


if((customer_info === 'y' || customer_info ==="Y")  || purchases >=5 )
{


    console.log("You are Eligible for the Offer ");


}


else {

    console.log("You are not eligible for the offer ");

}