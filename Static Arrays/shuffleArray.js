// 1470. Shuffle Array
// https://leetcode.com/problems/shuffle-the-array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let shuffled = []
  let j = n
  for (let i = 0; i < n; i++) {
      shuffled.push(nums[i])
      shuffled.push(nums[j])
      j++
  }
  return shuffled
};
