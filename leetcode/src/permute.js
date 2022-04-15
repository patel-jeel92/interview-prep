const permute2 = (nums) => {
  // global result
  const result = [];

  // dfsRecursive helper
  // eslint-disable-next-line no-shadow
  const dfsRecursive = (i, nums) => {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfsRecursive(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfsRecursive(0, nums);
  return result;
};

console.log(permute2([1, 2, 3]));
