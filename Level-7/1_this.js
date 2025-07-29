"use strict";

const student =  {

    name : "Shaoib",
    age : 25,
    eng: 99,
    physics: 50,
    pf: 77,

    getAvg()
    {
        let avg =  (this.eng + this.physics + this.pf) / 3 ;
        console.log(`The average is ${avg}`);


    }


}


