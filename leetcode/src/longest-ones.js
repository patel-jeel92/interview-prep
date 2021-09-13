const longestOnes = function (nums, k) {
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

const longestOnes2 = function (nums, k) {
  let windowZeros = 0;
  let windowStart = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    // if window end is at 0, increment count of zeros so we hit the constraint
    if (nums[windowEnd] === 0) {
      windowZeros++;
    }

    // While constraint is violated, shrink the window.
    while (windowZeros > k) {
      if (nums[windowStart] === 0) {
        windowZeros--;
      }
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes2([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
