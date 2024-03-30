// 27 REMOVE ELEMENT 
// https://leetcode.com/problems/remove-element/description/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[count++] = nums[i]
      }
  }
  return count

};

/*
  1.create a count variable(starting at 0)
  2.Loop through count 
    a.Condition if current value doesn't equal "val"
      i.Set nums[count] to nums[i]
      ii. Increment count
  3. Return count
*/
