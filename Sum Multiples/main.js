/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  if (n < 1) return 0;
  if (n % 3 == 0 || n % 5 == 0 || n % 7 == 0)
      return n + sumOfMultiples(n -1);
  else
      return sumOfMultiples(n -1);
};

console.log(sumOfMultiples(7));//21
console.log(sumOfMultiples(10));//40
console.log(sumOfMultiples(9));//30