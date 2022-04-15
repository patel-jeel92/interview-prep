const countGoodNodes = (root) => {
  let result = 0;

  // recursive helper method
  const dfsHelper = (node, maxValue) => {
    if (!node) {
      return 0;
    }

    // pre order traversal. For each node, do the computation first and then call dfs
    // on children recursively
    if (node.val >= maxValue) {
      result = 1;
    }

    maxValue = Math.max(node.val, maxValue);
    result += dfsHelper(node.left, maxValue);
    result += dfsHelper(node.right, maxValue);

    return result;
  };
  return dfsHelper(root, root.val);
};
export default countGoodNodes;
