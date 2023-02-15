/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    if (obj[res] != null) {
      return [obj[res], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
