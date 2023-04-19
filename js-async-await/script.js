async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData("https://jsonplaceholder.typicode.com/posts/1");