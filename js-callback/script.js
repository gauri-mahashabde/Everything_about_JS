//simple example of callback function

function sayHello(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function goodbye() {
  console.log("Goodbye!");
}

sayHello("John", goodbye);

//real time example of Callback

function fetchData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  });

  xhr.open("GET", url);
  xhr.send();
}

fetchData("https://jsonplaceholder.typicode.com/posts/1", (response) => {
  console.log(response);
});

//example 
// function
function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

// callback function
function callMe() {
  console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

//example 
//  program that shows the delay in execution

function greet() {
  console.log('Hello world');
}

function sayName(name) {
  console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');

function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);