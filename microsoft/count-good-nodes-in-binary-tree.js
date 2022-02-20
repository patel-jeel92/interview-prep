const countGoodNodes = (root) => {
  let result = 0;

  const dfsHelper = (node, maxValue) => {
    if (!node) {
      return 0;
    }
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
