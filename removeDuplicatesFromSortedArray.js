// 26. Remove Duplicates From Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let i = 0

  for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
          i++;
          nums[i] = nums[j]
      }
  }
  return i + 1;
  // It maintains two pointers: i (slow pointer) and j (fast pointer).
  // It iterates through the array, comparing elements at i and j.
  // If a unique element is found, it's moved to the position indicated by i.
  // Finally, it returns the length of the modified array with duplicates removed.
};
