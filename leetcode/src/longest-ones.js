var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let zeros = 0;
  let max = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeros++;
    }
    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
