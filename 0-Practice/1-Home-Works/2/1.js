let temp = prompt("Enter the Temperaure in Celcius: ")


if(temp < 0)
{
    console.log("Freezing");


}


else if(temp >=0 && temp <=10 )
{

    console.log("Very Cold");
}


else if(temp>=11 && temp <=20)
{


    console.log("Cold");
}


else if(temp >=21 && temp <=30)
{

    console.log("Warm");

}


else {

    console.log("Hot");

}