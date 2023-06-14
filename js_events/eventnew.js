//name_of_EventHandler = "The javaScript code / function which is required to be executed"

<input type="button" value="Save" onclick="alert('The button is clicked!')"/>

    function myAlert() {
        alert('The button is clicked!');
    }

<input type="button" value="Save" onclick="myAlert()"/>


let btn = document.querySelector("button");
btn.addEventListener("mousedown", event => {
  if (event.btn == 0) {
    console.log("Left mouse button was pressed");
  } else if (event.btn == 1) {
    console.log("Middle mouse button was pressed");
  } else if (event.btn == 2) {
    console.log("Right mouse button was pressed");
  }
});