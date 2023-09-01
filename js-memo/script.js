/*memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous 
input to something called cache and returning the result from it.*/

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(i)
   sum += i;
  }
  return sum;
};
 
console.log(calc(5));