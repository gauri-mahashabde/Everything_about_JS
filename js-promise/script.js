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
    .then(response => console.log(response))
    .catch(error => console.error(error));