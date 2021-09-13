const unboundedKnapsack = function (weights, values, w) {
  const dp = Array.from({ length: values.length + 1 }, () => []);

  for (let i = 0; i <= weights.length; i++) {
    for (let j = 0; j <= w; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          values[i - 1] + dp[i][j - weights[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[weights.length][w];
};

console.log(unboundedKnapsack([2, 3, 4, 5], [1, 2, 5, 6], 8));
