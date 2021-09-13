const minimumTotal = function (triangle) {
  let total = 0;
  for (let i = 0; i < triangle.length; i++) {
    let min = Number.POSITIVE_INFINITY;
    for (let j = 0; j < triangle[i].length; j++) {
      const value = triangle[i][j];
      if (value < min) {
        min = value;
      }
    }

    total += min;
  }
  return total;
};

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
