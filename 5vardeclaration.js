//Declare three variables: one using var, one using let, and one using const. Try reassigning values to them and note any errors or behaviors.


//variable declaration
let a = 10;    // using let
var b = 11;    // using var
const c = 1110; // using const


//reassigning values
a=11;               //let can be reassigned but are block-scoped
b=10;               //var can be reassigned w/o issue and r function scoped
//c=1011;        commenting this cause this will create error
console.log(a);             //output:11
console.log(b);             //output:10
console.log(c);             //output:1110(unchanged)