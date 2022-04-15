const minimumNumberOfBrushStrokes = (A) => {
  let count = 0;
  let prevHeight = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > prevHeight) {
      count += A[i] - prevHeight;
    }
    prevHeight = A[i];
  }

  return count;
};

const temp = (A) => {
  let result = 0;
  for (let i = 1; i < A.length; i++) {
    result += Math.max(0, A[i - 1] - A[i]);
  }
  return result + A[A.length - 1];
};
console.log(minimumNumberOfBrushStrokes([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]));
console.log(temp([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]));
