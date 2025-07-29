let cart =  {

    items:  [

        {name:"Book" , price:300, quantity:2},
        {name:"Pen", price:50, quantity:3},
        {name:"Bag", price:1500, quantity:1}
    
    ]



}


// console.log(items.length);


function calculateTotalCart(obj)
{   
    let price = 0;
    for(let i in obj)
    {
      let siz =  obj[i].length;

      for(let j=0; j<siz; j++ )
      {
            price = price  + obj[i][j].price * obj[i][j].quantity  ; 

      }
    }

    console.log(`Price: ${price}`);

}

calculateTotalCart(cart);