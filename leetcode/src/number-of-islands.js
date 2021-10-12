const numIslands = (grid) => {
  // Counter to store number of islands.
  let counter = 0;

  // helper function to check if its a 1. If it is, change it to a 0 so we don't revisit it. And then
  // recursively call with the neighboring locations.
  const checkIsland = (i, j) => {
    // Make sure you are inside the grid at all times. If they are out of bounds, dont do anything.
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === '1'
    ) {
      // Change it to a 0 so we dont revisit the same location.
      grid[i][j] = '0';
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        counter += 1;
        checkIsland(i, j);
      }
    }
  }

  return counter;
};
