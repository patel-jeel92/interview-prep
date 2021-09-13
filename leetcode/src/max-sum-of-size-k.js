const maxSumOfSizeK = function (array, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += array[i];
  }

  let maxSum = sum;
  for (let i = size; i < array.length; i++) {
    sum = sum - array[i - size] + array[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

console.log(maxSumOfSizeK([1, 2, 1, 2, 6, 7, 5, 1], 2));
