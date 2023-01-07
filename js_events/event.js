//Events are actions that happen when a user interacts with the page.
// like clicking an element, typing in a field, or loading a page.

//Event Handler
//To react on events we can assign a handler – a function that runs in case of an event.
//Handlers are a way to run JavaScript code in case of user actions.

//There are 5 types of events
//1.Mouse Events
//2.Keyboard Events
//3.Form Element Events
//4.Document Events
//5.CSS events

//Mouse events
//click event
/*function myFunc() {
  let elem = document.getElementById("testbox");
  elem.innerText = "Test Box: Click event is fired";
  elem.style.color = "red";
}

//dblclick event
//selecting an button
let btn = document.getElementById("btn");
//adding an event listener on the selected buttonn
btn.addEventListener("dblclick", (event) => {
  let div = document.getElementById("add");
  div.innerHTML = "Double click event is fierd";
});

//mouse down event
let btn1 = document.getElementById("btn1");
btn1.addEventListener("mousedown", (e) => {
  let div = document.getElementById("add1");
  div.innerHTML = "Mouse Down is fired";
});

//mouse up event
let btn2 = document.getElementById("btn2");
btn1.addEventListener("mouseup", (e) => {
    console.log("Button clicked")
  let div = document.getElementById("add2");
  div.innerHTML = "Mouse up is fired";
});

//Mousemove Event
let div = document.getElementById("add3");
div.addEventListener('mousemove',(e)=>{
    div.innerText="Mousemove event is fierd"
});*/


const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}   

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});


const btn2 = document.getElementById("btn2");

