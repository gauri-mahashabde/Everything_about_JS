function fetchData(url , callback){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText)
        }
    })

    xhr.open("GET",url);
    xhr.send();
}

fetchData("https://jsonplaceholder.typicode.com/posts/1",response => {
    console.log(response);
  });