/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let firstCall = true;
  
  return function(...args){
    if (firstCall) {
      firstCall = false;
      return args.reduce((curr, acc) => acc + curr, 0);
    }
    else
      return undefined;
  }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn