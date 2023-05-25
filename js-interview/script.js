//1
function fruit() {
  console.log(name1);
  console.log(price);
  var name1 = "apple";
  let price = 20;
}

fruit();

//2

let c = { name1: "peter" };
let d;
d = c;
c.name1 = "anil";
console.log(d.name1);

//3

let a = 3;
let b = "3";
console.log(a == b);
console.log(a === b);

//4

function sum(a, b) {
  return a + b;
}
console.log(sum(1, "2"));

//5
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

//6
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}
getAge();

//slice
let arr = [
    "educative",
    4,
    [1,3],
    {type: "animal"}
  ];
  let slicedValues = arr.slice(1,3);
  console.log(arr);
  console.log(slicedValues);

  //splice

  let arr1 = [
    "educative",
    4,
    [1,3],
    {type: "animal"}
  ];
  let returnedArr = arr.splice(2,1,{name: "educative"});
  console.log(arr);
  console.log(returnedArr);

  //problem 

  const marks = [25,46,47,50,25];
  // check if the array contains duplicate or not//
  const containsDuplicate = (nums) =>  {
    }
//https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
//1
    var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);

//2
var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output);
