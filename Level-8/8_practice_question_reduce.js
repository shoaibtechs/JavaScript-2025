let arr =  [1,2,3,4,66, 7];


let maxVal =  arr.reduce((max, i) =>{

    if (i>max)
    {
        return i;

    }

    else{

        return max;
    }





});


console.log(`The maximum value is ${maxVal}`);


