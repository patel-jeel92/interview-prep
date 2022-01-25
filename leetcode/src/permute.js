const permute = function (nums) {
  const result = [];

  const permuteHelper = (input, tempList) => {
    // if permutation size is equal to nums size then we have a valid permutation
    if (input.length === 0) {
      result.push([...tempList]);
    }

    // Loop
    for (let i = 0; i < input.length; i++) {
      // Choose
      tempList.push(input[i]);
      const tempNums = input.filter((value) => input[i] !== value);

      // Explore
      permuteHelper(tempNums, tempList);

      // Un choose
      tempList.pop();
    }
  };

  permuteHelper(nums, []);
  return result;
};

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

console.log(permute([1, 2, 3]));
console.log(permute2([1, 2, 3]));
