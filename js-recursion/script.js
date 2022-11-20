//Recursion is a process of calling itself. A function that calls itself is called a recursive function.
//recursion example

function factorial(x) {
    if (x == 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

console.log(factorial(5));