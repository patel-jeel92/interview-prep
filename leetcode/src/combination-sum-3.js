const combinationSum3 = (k, n) => {
  // global result
  const result = [];
  const nums = [];
  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }

  // backtrack helper
  // eslint-disable-next-line no-shadow
  const backtrack = (i, nums, k, n, slate) => {
    // backtracking case
    if (n < 0) return;

    // base case
    if (slate.length === k) {
      if (n === 0) {
        result.push(slate.slice());
      }
      return;
    }

    // recursive case
    for (let j = i; j < nums.length; j++) {
      slate.push(nums[j]);
      backtrack(j + 1, nums, k, n - nums[j], slate);
      slate.pop();
    }
  };

  backtrack(0, nums, k, n, []);
  return result;
};

console.log(combinationSum3(3, 7));
