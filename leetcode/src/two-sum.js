const twoSum = function (nums, target) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      result.push(map.get(complement));
      result.push(i);
    } else {
      map.set(nums[i], i);
    }
  }

  return result;
};
export default twoSum;
