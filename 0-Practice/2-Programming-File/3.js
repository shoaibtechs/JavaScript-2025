function findFactorial(n)
{
    if(n==1)
    {
        return 1;

    }

    else{

        return n * findFactorial(n-1);

    }

}




let fact =  findFactorial(5);

console.log(`The Factorial is ${fact}`);