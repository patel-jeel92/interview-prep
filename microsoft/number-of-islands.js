const getIslandCount = function (grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === '0'
  ) {
    return 0;
  }

  grid[i][j] = '0';

  getIslandCount(grid, i + 1, j);
  getIslandCount(grid, i - 1, j);
  getIslandCount(grid, i, j + 1);
  getIslandCount(grid, i, j - 1);

  return 1;
};

const numIslands = function (grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let numberOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        numberOfIslands += getIslandCount(grid, i, j);
      }
    }
  }

  return numberOfIslands;
};
export default numIslands;
