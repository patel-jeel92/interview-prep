const findMissingNumber = (input) => {
  const gSum = (input.length * input.length + 1) / 2;
  let sum = 0;
  for (const val of input) {
    sum += val;
  }

  return gSum - sum;
};

export default findMissingNumber;
