const letterCasePermutation = (input) => {
  // global result
  const global = [];

  // Recursive dfs helper
  // eslint-disable-next-line no-shadow
  const dfs = (i, input, slate) => {
    // backtracking case. No backtracking case in this problem

    // base case
    if (i === input.length) {
      global.push(slate.join(''));
      return;
    }

    // recursive case
    const char = input[i];

    // eslint-disable-next-line radix
    if (Number.isInteger(parseInt(char))) {
      slate.push(char);
      dfs(i + 1, input, slate);
      slate.pop();
    } else {
      // two cases. upper case and lower case
      slate.push(char.toUpperCase());
      dfs(i + 1, input, slate);
      slate.pop();

      slate.push(char.toLowerCase());
      dfs(i + 1, input, slate);
      slate.pop();
    }
  };

  dfs(0, input, []);
  return global;
};

export default letterCasePermutation;
