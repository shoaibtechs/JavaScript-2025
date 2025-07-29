function reverseString(str)
{      
    let reverseStr =  "";
    for(let i=0; i< str.length; i++)
    {
        reverseStr =  str[i] + reverseStr;


    }

    console.log(reverseStr);

}

reverseString("Hello World");