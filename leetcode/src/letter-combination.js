const letterCombinations = function (digits) {
  // global result
  const result = [];

  // Map to figure out what the letters for each digit maps to.
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  // recursive helper method
  // eslint-disable-next-line no-shadow
  const dfs = (i, digits, slate) => {
    // base case
    if (i === digits.length) {
      result.push(slate.join(''));
      return;
    }

    // recursive case
    const mapping = map[digits[i]];

    for (let j = 0; j < mapping.length; j++) {
      slate.push(mapping[j]);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };

  dfs(0, digits, []);
  return result;
};

console.log(letterCombinations('23'));
