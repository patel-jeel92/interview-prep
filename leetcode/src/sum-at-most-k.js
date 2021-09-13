const sumAtMostK = function (array, k) {
  let answer = 0;
  let sum = 0;
  let right = 0;
  for (let left = 0; left < array.length; left++) {
    if (left > 1) {
      sum -= array[left - 1];
    }
    while (right < array.length && sum + array[right] <= k) {
      sum += array[right];
      right++;
    }
    answer = Math.max(answer, right - left);
  }
  return answer;
};

const sumAtMostK2 = function (array, k) {
  let maxWindowSize = Number.NEGATIVE_INFINITY;
  let currentWindowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    currentWindowSum += array[windowEnd];

    while (currentWindowSum > k && windowStart < array.length) {
      currentWindowSum -= array[windowStart];
      maxWindowSize = Math.max(maxWindowSize, windowEnd - windowStart + 1);
      windowStart++;
    }
  }

  return maxWindowSize;
};

console.log(sumAtMostK([1, 2, 1, 5, 1, 1, 2], 5));
console.log(sumAtMostK2([1, 2, 1, 5, 1, 1, 2], 5));
