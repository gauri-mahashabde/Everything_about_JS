//closure
//Closures are functions that refer to independent (free) variables.
//In other words, the function defined in the closure ‘remembers’ the environment in which it was created.

//step1
function init() {
  const name = "Gauri";
  function displayName() {
    console.log(name);
  }
  displayName();
}

//init();

//step2
function myFunc() {
  const name = "Gauri";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const funcCall = myFunc();
//funcCall();

//Example
let counter = 0;
function add() {
  counter += 1;
}

add();
add();
add();
counter += 5;
//console.log(counter);

//in this is the problem statement is the variable counter can also be updated with out calling the function add.
//we can directly update counter without calling the function , so here the variable is not private to the function.
//to solve this issue , we will write one more set of code.

function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

x = add();
y = add();
z = add();

console.log(x);
console.log(y);
console.log(z);