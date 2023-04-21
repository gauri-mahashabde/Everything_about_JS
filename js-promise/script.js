//syntax of promise

new Promise(function (resolve, reject) {
  // Some asynchronous operation
});

//simple example for promise
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("The operation completed successfully!");
  }, 2000);
  myPromise
    .then(function (result) {
      console.log(result); // Output: "The operation completed successfully!"
    })
    .catch(function (error) {
      console.log(error); // Output: "An error occurred!"
    });
});

//real time example for promise
function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject("Error fetching data");
        }
      }
    });

    xhr.open("GET", url);
    xhr.send();
  });
}

fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

//examples of promise
