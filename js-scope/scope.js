/*scope determines the accessibility of variables
before ES6 we just had 2 scopes Local and Global 
with the introduction of let and const we have block and function scope */

//Global scope 
//variable declared outside a function , works similarly with var ,let and const 

var name1 = "Joye";
console.log(name1);

let name2 = "Grey";
console.log(name2);

const name3 = "Green";
console.log(name3);

//Local scope
//variable declared inside a function ,can only be accesses inside a function

function myName(){
    let country = "India";
    console.log(country);
};

//tried to access outside a function throws reference error
myName();
//console.log(country);- will throw error

//Block Scope
//Cannot access the variables declared inside a particular block
{let cars = "BMW"
console.log(cars);}

//console.log(cars);will throw error

//Function Scope
//Cannot access variables defined inside a function or from another function

function food(){
    var fruits = "Banana";
    let Vegies = "Carrot";
    let sweet = "Halwa";
    console.log(fruits,Vegies,sweet);
}

food();

//console.log(fruits,Vegies,sweet); will throw error










