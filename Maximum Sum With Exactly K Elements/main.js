/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let sum=0;
  nums.sort((a, b) => a-b);
  for (let i=0; i< k; i++) {
      let temp = nums.pop();
      sum += temp;
      ++temp;
      nums.push(temp);
  }
  return sum;
};

console.log(maximizeSum([1,2,3,4,5], 3));//18
console.log(maximizeSum([5,5,5], 2));//11