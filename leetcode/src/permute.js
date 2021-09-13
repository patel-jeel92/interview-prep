const permute = function (nums) {
  const result = [];

  const permuteHelper = (input, tempList) => {
    // if permutation size is equal to nums size then we have a valid permutation
    if (input.length === 0) {
      result.push([...tempList]);
    }

    // Loop
    for (let i = 0; i < input.length; i++) {
      // Choose
      tempList.push(input[i]);
      const tempNums = input.filter((value) => input[i] !== value);

      // Explore
      permuteHelper(tempNums, tempList);

      // Un choose
      tempList.pop();
    }
  };

  permuteHelper(nums, []);
  return result;
};

console.log(permute([1, 2, 3]));
