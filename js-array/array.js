//Ways of iterating over a array in JavaScript

// Accessing array elements one by one
const array = ['geeks', '4', 'geeks'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//Using for loop

const array1 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i]);
}

//Using while loop

let i = 0;
while (i < array1.length) {
    //console.log(array1[i]);
    i++

}

//for of 

for(let x of array1){
    console.log(x);
}

//for in 
let obj = {
    Name:"ross",
    age:"23",
    dept:"bank",
}

for (let y in obj){
    console.log(obj[y]);
}

const cars = ["Saab", "Volvo", "BMW"];