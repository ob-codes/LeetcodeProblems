/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 2) 
    return nums.length;

  
  let result = 0, totalReplaced=0;
  
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i+1; j < nums.length; j++) {      
      if (nums[j] == nums[i] && nums[j] != 10001){
        count++;

        if (count > 1) {
          nums[j] = Math.pow(10, 4) + 1;
          totalReplaced++;
        }
      } 
    }    
  }
  if (totalReplaced == 0)
    return nums.length;

  nums = nums.sort((a, b) => a-b).slice(0, -totalReplaced);

  return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3])); // 5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3])); //7, nums = [0,0,1,1,2,3,3,_,_]
console.log(removeDuplicates([0,0,0,0,0])); //2, nums = [0,0]
console.log(removeDuplicates([1,2,3,4])); //4, nums = [1,2,3,4]