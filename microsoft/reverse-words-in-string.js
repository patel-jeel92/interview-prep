const reverseWordsInString = (input) => {
  return input.split(/\s/).reverse().join('').replace(/\s/, '').trim();
};

export default reverseWordsInString;
