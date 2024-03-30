// 1929 Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  let n = nums.length;
  for(let i = 0; i < n; i++){
      nums.push(nums[i])
  }
  return nums
};
