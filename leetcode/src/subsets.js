const subsets = (nums) => {
  // global result
  const result = [];

  // eslint-disable-next-line no-shadow
  const dfsRecursive = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    // include
    slate.push(nums[i]);
    dfsRecursive(i + 1, nums, slate);
    slate.pop();

    // exclude
    dfsRecursive(i + 1, nums, slate);
  };

  dfsRecursive(0, nums, []);
  return result;
};

console.log(subsets([1, 2, 3]));
