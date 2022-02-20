const maxSubArray = (nums) => {
  let maxSub = nums[0];
  let currentSum = 0;
  for (const num of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += num;
    maxSub = Math.max(maxSub, currentSum);
  }

  return maxSub;
};
export default maxSubArray;
