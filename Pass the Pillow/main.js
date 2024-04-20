/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  if (n > time) 
    return time + 1;
  
  let noOfCircle = Math.floor(time / (n -1));
  let position = time % (n - 1);
  if (noOfCircle % 2 !== 0)
    return n - position;
  else if (noOfCircle % 2 == 0)
    return position +1;
};

console.log(passThePillow(4, 5));//2
console.log(passThePillow(3, 2));//3
console.log(passThePillow(8, 9));//6
console.log(passThePillow(6, 8));//3
console.log(passThePillow(5, 3));//4