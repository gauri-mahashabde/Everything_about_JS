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
