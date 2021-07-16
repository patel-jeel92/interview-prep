var findDuplicatesInConstantSpace = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (nums[num - 1] > 0) {
      nums[num - 1] *= -1;
    } else {
      result.push(num);
    }
  }

  return result;
};
