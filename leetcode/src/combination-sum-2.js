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
    if (i === candidates.length) {
      if (target === 0) {
        result.push(slate.slice());
      }
      return;
    }

    // include
    slate.push(candidates[i]);
    dfsRecursive(i + 1, candidates, target - candidates[i], slate);
    slate.pop();

    // exclude. Remove duplicates
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    dfsRecursive(i + 1, candidates, target, slate);
  };

  dfsRecursive(0, candidates, target, []);
  return result;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// export default combinationSum2;
