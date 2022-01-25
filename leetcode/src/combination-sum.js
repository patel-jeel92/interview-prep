const combinationSum = (candidates, target) => {
  // global result
  const result = [];

  // sort
  candidates.sort((a, b) => a - b);

  // dfs recursive helper
  // eslint-disable-next-line no-shadow
  const dfsRecursive = (i, candidates, target, slate) => {
    // backtracking case
    if (target < 0) return;

    // base case
    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    // dfs recursive case
    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfsRecursive(j, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };

  dfsRecursive(0, candidates, target, []);
  return result;
};
