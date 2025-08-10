// Check all the numbers in array are multiples of  10 or not 





let arr = [10, 20, 40, 60, 80];


let res =  arr.every((i)=>{

    return i%10==0;

});



console.log(res);