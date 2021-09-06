var minCostClimbingStairs = function (cost) {
  let dp = [];
  //We know we can reach in 0 cost on step 0 and 0+1
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= cost.length; i++) {
    //For any other step, we can either come from just previous step (i-1) or from previous to previous step (i-2). In both the cases we will consider the cost we paid of reaching to that step (dp[i-1] and dp[i-2]) and the cost we paid on that step (cost[i-1] and cos[i-2]) to jump on  'i'
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length];
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
