const arraySign = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      return 0;
    }
    if (input[i] < 0) {
      count += 1;
    }
  }

  if (count % 2 === 0) {
    return 1;
  }
  return -1;
};

export default arraySign;
