/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
};

console.log(removeDuplicates([1,1,1,2,2,3])); // 5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3])); //7, nums = [0,0,1,1,2,3,3,_,_]
console.log(removeDuplicates([0,0,0,0,0])); //2, nums = [0,0]
console.log(removeDuplicates([1,2,3,4])); //4, nums = [1,2,3,4]