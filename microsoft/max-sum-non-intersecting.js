const maximumSumOfNonIntersectingSegments = (array) => {
  const map = new Map();
  let start = 0;
  let end = 1;
  let maxCount = 0;
  let prevSum = -1;
  while (end < array.length) {
    const runningSum = array[start] + array[end];
    if (runningSum !== prevSum) {
      if (!map.get(runningSum)) {
        map.set(runningSum, 1);
      } else {
        map.set(runningSum, map.get(runningSum) + 1);
      }

      if (map.get(runningSum) > maxCount) {
        maxCount = map.get(runningSum);
      }
      prevSum = runningSum;
    }
    start++;
    end++;
  }
  return maxCount;
};

console.log(maximumSumOfNonIntersectingSegments([10, 1, 3, 1, 2, 2, 1, 0, 4]));
