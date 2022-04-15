const minAddToMakeBalanceParenthesis = (S) => {
  let open = 0;
  let result = 0;

  for (const char of S) {
    if (char === '(') {
      open++;
    } else if (char === ')' && open > 0) {
      open--;
    } else {
      result++;
    }
  }

  return result + open;
};
