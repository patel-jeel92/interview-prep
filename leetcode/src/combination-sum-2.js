const combinationSum2 = (candidates, target) => {
  // global result
  const result = [];

  // sort input
  candidates.sort((a, b) => a - b);

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
      // eslint-disable-next-line no-continue
      if (i !== j && candidates[j] === candidates[j - 1]) continue;
      slate.push(candidates[j]);
      dfsRecursive(j + 1, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };

  dfsRecursive(0, candidates, target, []);
  return result;
};

export default combinationSum2;
