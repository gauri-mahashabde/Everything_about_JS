//Recursion is a process of calling itself. A function that calls itself is called a recursive function.
//recursion example

function factorial(x) {
    if (x == 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

console.log(factorial(5));

//fibonacci number
//0,1,1,2,3,5,8,13,21,34

function fibonacci(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(5);
console.log(result);

