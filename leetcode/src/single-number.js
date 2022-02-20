const singleNumber = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    // eslint-disable-next-line no-bitwise
    result ^= nums[i];
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
