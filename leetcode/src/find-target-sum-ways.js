const findTargetSumWays = function (nums, target) {
  const dp = Array.from({ length: target + 1 }, () =>
    Array.from({ length: nums.length }, () => 0)
  );

  dp[0][0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      if (j - nums[i] >= 0) {
        dp[j][i + 1] += dp[j - nums[i]][i];
      }
      if (j + nums[i] <= target) {
        dp[j][i + 1] += dp[j + nums[i]][i];
      }
    }
  }

  return dp[target][nums.length];
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
