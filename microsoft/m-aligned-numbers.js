const mAlignedNumbers = (A, M) => {
  const hash = new Map();
  for (const num of A) {
    let res = num % M;
    if (res < 0) {
      res += M;
    }
    if (!hash.get(res)) {
      hash.set(res, [num]);
    } else {
      hash.get(res).push(num);
    }
  }

  let maxSize = 0;
  for (const [key, val] of hash) {
    if (val.length > maxSize) {
      maxSize = val.length;
    }
  }

  return maxSize;
};

console.log(mAlignedNumbers([-3, -2, 1, 0, 8, 7, 1], 3));
