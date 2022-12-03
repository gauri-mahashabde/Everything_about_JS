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
    if (arr1[i] > max) {
        max = arr1[i]
    }

}

console.log(max);

let min = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < min) {
        min = arr1[i]
    }
}

console.log(min);

//check if the number is divisible by 4 if yes the return the number by adding 10 to it using for loop
const arr2 = [2, 8, 5, 16, 24, 12];
console.log(arr2);
function checkNum(i) {
    if (i % 4 == 0) {
        return i + 10
    }
    else {
        return i
    }
}

const sum1 = arr2.map(checkNum);
console.log(sum1);

let arr3 = [2, 4, 6, 8, 24, 32];
console.log(arr3);
let arr4 = [];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 4 == 0) {
        arr4.push(arr3[i] + 10);
    }
    else {
        arr4.push(arr3[i]);
    }
}

console.log(arr4);

//from the given sorted array find the pair of elements whos sum is zero 

let arr5 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
console.log(arr5);

function checkSumZero(arr5) {
    for (let i = 0; i < arr5.length; i++) {
        for (let j = 1; j < arr5.length; j++) {
            if (arr5[i] + arr5[j] === 0) {
                return [arr5[i], arr5[j]];
            }

        }

    }
}

let rest = checkSumZero(arr5);
console.log(rest);


//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

let nums = [1, 2, 3, 4];
console.log(nums);

function findSum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

let sumOf = findSum(nums);
console.log(sumOf);


// find the maximum number of words that appear in a single sentence.
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(sentences);
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let i = 0; i< sentences.length;i++){
        let temp = sentences[i].split(" ").length;
        if(temp >  max){
            max = temp 

        }
    }
    return max;
}

let output = mostWordsFound(sentences);
console.log(output);

