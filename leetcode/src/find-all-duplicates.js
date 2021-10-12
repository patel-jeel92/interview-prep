const findDuplicatesInConstantSpace = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num - 1] > 0) {
      nums[num - 1] *= -1;
    } else {
      result.push(num);
    }
  }

  return result;
};
