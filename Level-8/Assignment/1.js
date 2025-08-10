const sumAndSquare  = (arr) => {

    let sum = 0;

    for(i of arr)
    {
        sum =  sum + i;
        console.log(`The Square of ${i} is ${i*i}`);

    }

    console.log(`The sum of array elements is ${sum}`);


    findAvg(arr, sum);


};



const findAvg = (arr, sum) => {

        let avg =  sum/arr.length;

        console.log(`The avg  is ${avg}`);




}



let arr =  [1,2,3,4,5];

sumAndSquare(arr);