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

console.log(subsets([1, 2, 3]));
