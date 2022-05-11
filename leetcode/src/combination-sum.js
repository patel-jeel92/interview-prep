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
    if (i === candidates.length) {
      if (target === 0) {
        result.push(slate.slice());
      }
      return;
    }

    // include (pass in i since you can choose the same element over and over)
    slate.push(candidates[i]);
    dfsRecursive(i, candidates, target - candidates[i], slate);
    slate.pop();

    // exclude (dont add it to the slate, move on to the next one)
    dfsRecursive(i + 1, candidates, target, slate);
  };

  dfsRecursive(0, candidates, target, []);
  return result;
};
console.log(combinationSum([2, 3, 6, 7], 7));
