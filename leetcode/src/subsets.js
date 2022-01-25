const subsets = function (nums) {
  const result = [];

  const backtrack = (input, tempList, startIndex) => {
    result.push([...tempList]);

    // Loop
    for (let i = startIndex; i < input.length; i++) {
      // Choose
      tempList.push(input[i]);

      // Explore
      backtrack(input, tempList, i + 1);

      // Un Choose
      tempList.pop();
    }
  };

  backtrack(nums, [], 0);

  return result;
};

const subsets2 = (nums) => {
  // global result
  const result = [];

  // eslint-disable-next-line no-shadow
  const dfsRecursive = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    // exclude
    dfsRecursive(i + 1, nums, slate);

    // include
    slate.push(nums[i]);
    dfsRecursive(i + 1, nums, slate);
    slate.pop();
  };

  dfsRecursive(0, nums, []);
  return result;
};

console.log(subsets([1, 2, 3]));
console.log(subsets2([1, 2, 3]));
