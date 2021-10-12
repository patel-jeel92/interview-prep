const subsetSum = (arr, sum) => {
  const dp = Array.from({ length: arr.length + 1 }, () => []);

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= sum; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else {
        dp[i][0] = true;
        dp[0][j] = false;
      }
    }
  }
};
