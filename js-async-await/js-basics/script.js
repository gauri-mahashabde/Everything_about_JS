console.log("Hello world");

//declaration of a variable using let keyword
let name1;
console.log(name1);
//It is undefined

let student = "Gauri";
console.log(student);

//rules to name a variable
//cannot use a reserve keyword
//should be meaningful
//cannot start with a number
//they cannot contain space or -
//are case sensitive

//primitive or value datatypes

let fname = "Gauri"; //string
let age = "24"; //number
let isApproved = true; //boolean
let lname = undefined; //undefined
let add = null; // null = empty

//non-primitive or reference datatypes

//object
let person = {
  fname: "Gauri",
  lname: "Mahashabde",
  age: 24,
  isaddmitted: true,
};

console.log(person);
//accessing a property
//dotnotation

console.log(person.age);

//bracket notation

console.log(person["fname"]);

//along with acccessing a property using dot or bracket notation we can also change the value of the property using similar things

//arrays

let selectedColors = ["red", "blue"];
selectedColors[2] = "Green";

console.log(selectedColors);

//accessing an element using index numbers
console.log(selectedColors[1]);

//functions

function greet(name) {
  console.log("Hello " + name);
}

greet("Gauri");
greet("jhon");
greet("mary");

//function without parameters

function callMe() {
  console.log("Good Morning");
}

function callMe2() {
  alert("Good evevning");
}

callMe();
callMe2();
