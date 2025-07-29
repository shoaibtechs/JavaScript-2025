function reverseNumber(n)
{
    let rev = 0;
    let num =  n;

    while(num > 0)
    {
        let rem =  num % 10;
        rev =  (rev*10) + rem;
        num = Math.floor(num/10);

    }

    console.log(`The reverse number of ${n} is ${rev}`);


}


reverseNumber(123);