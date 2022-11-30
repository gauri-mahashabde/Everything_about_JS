//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration

console.log(b);
var b = 10;// will return undefined 

// variable hoisting
//var keyword is hoisted let and const keyword does not allow hoisting

a = 6;            //var a;
console.log(a);   //a=6;
var a;            //console.log(a);

//initializations are not hoisted. 
console.log(c);     //var a;
var c = 5;          //console.log(a);
                    // a = 5;

//function hoisting

//A function can be called before declaring it

greet();

function greet(){
    console.log("Hello World");
}

//function as expression are not hoisted

//greet1();

let greet1 = function(){
    console.log("Hello ");
}

//arrow functions and hoisted
//arrow functions are not hoisted   
hello();

hello = () => {return "Hello world"};

                    



