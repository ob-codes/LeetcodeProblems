/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
  let firstCall = true;
  
  return function(...args){
    if (firstCall) {
      firstCall = false;
      return fn(...args);
    }
    else
      return undefined;
  }
};


function fn(a, b, c) {
  return a + b + c;
}
let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn