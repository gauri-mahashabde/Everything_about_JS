// a variable is a container (storage area) to hold data;

var a; // declaring a variable
a = 5; //initilizing a value to the variable 

//declaration and initilization can be done in single line
var a = 5;

//undefined 
//a variable which has not been assigned any value is said to return undefined

var b;
console.log(b);

//value of variable can be changed 

var name1 = "Gauri";
console.log(name1);
name1 = "Chaitra";
console.log(name1);

/*Rules for naming variables
Variable names must start with either a letter, an underscore _, or the dollar sign $
Variable names cannot start with numbers.
JavaScript is case-sensitive. So y and Y are different variables.
Keywords cannot be used as variable names*/

//with ES6 is the addition of let and const, which can be used for variable declaration

let car = "BMW";
console.log(car);

const bike = "pulsar";
console.log(bike);

//difference between var , let and const 

// variable var is globally scoped or function/locally scoped.

var callName = "Hello";

function callMe() {
    var call1 = "Hello, world! "
    console.log(call1);
    console.log(callName);
}

callMe();
console.log(callName);
//console.log(call1); // error call1 not defined

//var variables can be re-declared and updated
//var can be hoisted

var school = "Jaanavika";
var school = "NMM";

console.log(school);

//let is block scoped 

let greet = "Hey Everybody";

function greeting(){
    let greets = "Hello joye";
    console.log(greets);
    console.log(greet);
}

greeting();
//console.log(greets); // error undefined

//let can be updated but not re-declared.

let fruit = "orange";
fruit = "Apple";

console.log(fruit);

let fruits = "banana";
console.log(fruits);
//let fruits = "grapes";
//console.log(fruits); // error = fruits has already been declared

//let keyword are hoisted to the top but are not initialized.

//Variables declared with the const maintain constant values

const home = "nyk";
console.log(home);

//const declarations are block scoped
let greet1 = "Hey All";

function greeting1(){
    let greets = "Hello Ross";
    console.log(greets);
    console.log(greet1);
}

greeting1();
//console.log(greets);// greet is not defined 

//const cannot be updated or re-declared

const clg = "svn";
console.log(clg);

//clg = "PCJ";
//console.log(clg) //Assignment to constant variable. 

//hoisted to the top but are not initialized.

