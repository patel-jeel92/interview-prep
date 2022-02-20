const serialize = (root) => {
  const result = [];

  const dfs = (node) => {
    if (!node) {
      result.push(null);
      return;
    }

    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return result;
};

const deserialize = (data) => {
  let index = 0;

  const dfs = () => {
    if (data[index] === null) {
      index++;
      return null;
    }
    const node = new TreeNode(parseInt(data[index]));
    index++;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};
