const subArraySumEqualsK = (nums, k) => {
  let result = 0;
  let currentSum = 0;
  const map = new Map();
  map.set(0, 1);

  for (const num of nums) {
    currentSum += num;
    const diff = currentSum - k;

    if (map.get(diff)) {
      result += map.get(diff);
    } else {
      if (map.get(currentSum)) {
        map.set(currentSum, map.get(currentSum) + 1);
      } else {
        map.set(currentSum, 1);
      }
    }
  }
  return result;
};
