const generateParenthesis = (n) => {
  // global result
  const result = [];

  // backtrack helper
  // eslint-disable-next-line no-shadow
  const backtrack = (i, n, slate, openingCount, closingCount) => {
    // backtracking case
    if (openingCount > n) {
      return;
    }

    if (closingCount > openingCount) {
      return;
    }
    // base case
    if (i === 2 * n) {
      result.push(slate.join(''));
    }

    // recursive case
    // Case 1 (push open bracket)
    slate.push('(');
    backtrack(i + 1, n, slate, openingCount + 1, closingCount);
    slate.pop();

    // Case 2 (push closing bracket)
    slate.push(')');
    backtrack(i + 1, n, slate, openingCount, closingCount + 1);
    slate.pop();
  };

  backtrack(0, n, [], 0, 0);
  return result;
};

console.log(generateParenthesis(3));
