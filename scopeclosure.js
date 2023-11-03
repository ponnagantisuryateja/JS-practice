function global(){
        let x="surya bhai";
        console.log(x);
}
global();

//closure
var a= 10;
function surya(){ // Outer Function
var b= 20;

var teja = function(){ // Inner Function
            console.log(b);
}
return teja;
}
surya();


 var inner = surya();
console.log(inner);




