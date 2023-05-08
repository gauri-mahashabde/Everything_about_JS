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

/*in this is the problem statement is the variable counter can also be updated with out calling the function add.
we can directly update counter without calling the function , so here the variable is not private to the function.
to solve this issue , we will write one more set of code.*/

function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

//x = add();
//y = add();
//z = add();

//console.log(x);
//console.log(y);
//console.log(z);

/*now if we check closure is private to function add , but the issue now is , whenever we call the function add,
again counter is initialized and starts with zero , so as many times we run the function , the counter is 
always one*/

/*to solve this issue we will use immediately invoked function */

const add1 = (function(){
    let counter = 0;
    function plus (){
        counter += 1;
        return counter;
    }
    return plus ;
})();

 let x= add1();
 let y = add1();
 let z = add1();

 console.log(x);
 console.log(y);
 console.log(z);

 /*here both the problem statements are solved , using iife a anonymous function is called , which runs just once , 
 with which the counetr is inilized , after that the inner function is called and counter is increased everytime the function is called
 and also the variable counter is just private to the function add and cannot be updated without calling the function*/