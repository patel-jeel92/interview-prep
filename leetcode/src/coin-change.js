const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case - to make amount 0 we need 0 coins

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

const coinChange2 = function (coins, amount) {
  const dp = Array.from({ length: coins.length + 1 }, () => []);

  for (let i = 0; i <= coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (coins[i - 1] <= j) {
        dp[i][j] = Math.min(dp[i - 1][j - coins[i - 1]] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[coins.length][amount];
};

console.log(coinChange([1, 2, 5], 11));

console.log(coinChange2([1, 2, 5], 11));
