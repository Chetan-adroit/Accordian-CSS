//what is Scope Chain and Lexical Enviorment/Scope in JS?
// let a = 5;
function abc(){
    var a =10;
    function xyz(){
        console.log(a);
    }
    xyz();
}
abc();
console.log(a);