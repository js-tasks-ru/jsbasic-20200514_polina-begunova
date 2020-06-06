/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let number = 1;
  for (let i = 2;  i<= n; i++)
  number = number*i
  return number
}
