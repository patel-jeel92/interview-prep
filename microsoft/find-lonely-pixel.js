const findLonelyPixel = (input) => {
  if (input === null || input.length === 0 || input[0].length === 0) {
    return 0;
  }
  const row = Array.from({ length: input.length }, () => 0);
  const column = Array.from({ length: input[0].length }, () => 0);
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === 1) {
        row[i]++;
        column[j]++;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === 1 && row[i] === 1 && column[j] === 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(
  findLonelyPixel([
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ])
);
