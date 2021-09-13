const minFallingPathSum = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const dp = Array.from({ length: m }, () => []);

  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j];
      } else if (j === n - 1) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + matrix[i][j];
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) +
          matrix[i][j];
      }
    }
  }

  return Math.min(...dp[dp.length - 1]);
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);
