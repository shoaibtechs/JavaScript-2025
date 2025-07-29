// 🧠 Question: Custom Array Processor
// Write a higher-order function called processArray that:

// Takes two arguments:

// An array of numbers

// A function (callback)  will separate the even and odd numbers in seprate arrays 



function processArray(func, arr)
{

    func(arr);


}


function evenOddSeprate(arr)
{

    let even =  [];
    let odd =  [];
    
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2 ==  0)
        {
            even.push(arr[i]);

        }

        else {

            odd.push(arr[i]);

        }

    }


    console.log(`Even array: ${even}   \nOdd array: ${odd}`);

}

let array = [1,3,24,4,2,4,55,67];

processArray(evenOddSeprate, array);
