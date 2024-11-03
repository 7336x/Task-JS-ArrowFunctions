/**
 * Rewrite the following `greet` function as an arrow function
 */
// function greet(name) {
//   return `Hello ${name}`;
// }
const greet = (name) => `Hello ${name}`;

/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow function
 */

const sum = (a, b) => a + b;

console.log(sum(3, 4)); 
console.log(sum(10, 5));

/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
const square = (n) => n * n;

console.log(square(4)); 
console.log(square(10)); 
/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
// function squares(numbers) {
//   // Your code here
// }




module.exports = {
  greet,
  sum,
  square,
  //squares,
};
