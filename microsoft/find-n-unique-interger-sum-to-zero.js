const findNUniqueIntegerSumToZero = (n) => {
  // Go up to n/2 and add a negative and positive of the same i value

  // if even, you are good, if odd, just add a zero
  const result = [];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    result.push(i);
    result.push(i * -1);
  }
  if (n % 2 !== 0) {
    result.push(0);
  }
  return result;
};

console.log(findNUniqueIntegerSumToZero(5));
