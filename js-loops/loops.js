//Loops are used in JavaScript to perform repeated tasks based on a condition. 
// you want to show a message 10 times, then you can use a loop
//for loop has three expression initialization ,condition ,finalExpression 

//printing a message 10 times using for loop

for (let i = 1; i < 11; i++) {
    //console.log(`${i} good morning`)

}

//display a sequence of even number in the range of 0 to 20 

for (let i = 0; i < 21; i += 2) {
    //console.log(i);
}

//display a sum of all the natural numbers in the range of 0-10
let sum = 0;
for (let i = 0; i < 11; i++) {

    sum = sum + i
    //console.log(sum);
}

//check odd and even numbers of an array and return 2 new array

const arr = [3, 6, 1, 5, 9, 4, 7, 10, 11];
const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenNumbers.push(arr[i])
    }
    else {
        oddNumbers.push(arr[i])
    }
}
//console.log(arr);
//console.log(evenNumbers);
//console.log(oddNumbers);

//loop through the array to find the max and the min value

const arr1 = [67, 56, 21, 3, 45, 89, 2, 90];

let max = 0;
for (let i = 0; i < arr1.length; i++) {
   if(arr1[i]>max){
    max = arr1[i]
   }
   
}

console.log(max);

 let min = arr1[0];
 for(let i = 0; i< arr1.length; i++){
    if(arr1[i]< min){
        min = arr1[i]
    }
 }

 console.log(min);