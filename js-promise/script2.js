//syntax

var promise = new Promise(function(resolve, reject) {
    // do thing, then…
  
    if (1==1) {
      resolve("See, it worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

  //example

  const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);