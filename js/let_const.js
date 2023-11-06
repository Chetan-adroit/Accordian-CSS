
function show(){
    
    for(var i=1;i<=10;i++){
        setTimeout(function(){
            console.log(i);
        },i*2000)
    }
}

show()