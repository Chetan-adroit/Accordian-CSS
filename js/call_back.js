let stocks = {
    Fruits:["strawberry","grapes"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","penauts"]
};

let order = (Fruit_name,call_production) =>{
   setTimeout(()=>{
    console.log(`${stocks.Fruits[Fruit_name]}`)
    call_production();
   },6000);
   
};

let production=()=>{
    setTimeout(()=>{
        console.log("production has started");
        setTimeout(()=>{
            console.log("Fruit has been cut");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("started machine");
                    setTimeout(()=>{
                        console.log(`Selected  ${stocks.holder[0]}`)

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]}`)
                            setTimeout(()=>{
                                console.log("serve ice cream")
                            },2000)
                        },3000)

                    },2000);
                },1000);


            },1000);
        }, 2000)
    }, 0);

};

order(0,production);
