//Recursion is a process of calling itself. A function that calls itself is called a recursive function.
//recursion example

function factorial(x) {
    if (x == 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

//console.log(factorial(5));

//fibonacci number
//0,1,1,2,3,5,8,13,21,34

function fibonacci(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(5);
//console.log(result);


//example 3 reverse a string
const str = "Virat"
function reverseString(str) {

    if (str == undefined || str == null || str == "") return "";
    return reverseString(str.substr(1)) + str[0];
}

const rvstr = reverseString(str);
//console.log(rvstr);



const str2 = "Anushka"
const rvstr2 = reverseString(str2);
//console.log(rvstr2);

//example 4 

const arr = [5, 7, 8, 3, 2, 1];

function sumofodd(i) {

    if (i <= 0) {
        return 0;
    }
return i + sumofodd(i - 2)

}



function getSum(i) {
    if (i % 2 == 0) {
        return sumofodd(i - 1)

    }
    else {
        return sumofodd(i);
    }
}

getSum(7); 7 + 5 ,5 + 3 ,3 + 1, 1 + 0 = 16;

getSum(8);
