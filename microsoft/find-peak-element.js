const findPeakElement = (input) => {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (input[mid] > input[mid + 1] && input[mid] > input[mid - 1]) {
      return mid;
    }
    if (input[mid] > input[mid + 1]) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return left;
};

console.log(findPeakElement([1, 0, 1, 3, 3, 2, 4, 10]));
