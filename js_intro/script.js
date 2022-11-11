//Declaring a variable
var name;
//Initializing a varibale
//using var key word
var name1 = "Ross";
document.getElementById("var").innerHTML = name1;
console.log(name1);
//using let key word
let name1 = "Ross";
document.getElementById("let").innerHTML = name1;
console.log(name1);
//using const key word
const name1 = "Ross";
document.getElementById("const").innerHTML = name1;
console.log(name1);

function add(a,b){
    return (a+b);
}
var c = add(5,7)
console.log(c);

function sub(a,b){
    return (a-b);
}
console.log(sub(10,2));

function div(a,b){
    return (a/b);
}
console.log(div(10,2));


