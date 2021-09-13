const letterCombinations = function (digits) {
  if (digits === '') return [];

  // Array to hold the final answer.
  const res = [];

  // Map to figure out what the letters for each digit maps to.
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  // Helper function that uses backtracking for each digit.
  function findAllCombinations(index, str) {
    // Base case. If digit length === index then we have gone through all possibilities for the single char.
    if (index === digits.length) {
      res.push(str);
      return;
    }

    // Grab the mapping for the first digit at index.
    const chars = map[digits.charAt(index)];

    // Iterate through all the chars and add recursively call with incremented index and char added to the string.
    for (let i = 0; i < chars.length; i++) {
      findAllCombinations(index + 1, str + chars[i]);
    }
  }

  // Start at index 0 of the digit and an empty string to build the answer.
  findAllCombinations(0, '');

  return res;
};

const letterCombinations2 = function (digits) {
  if (digits.length === 0) return [];

  // Map to figure out what the letters for each digit maps to.
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let combinations = [...map[digits[0]]];

  for (let i = 1; i < digits.length; i++) {
    const updatedCombinations = [];
    combinations.forEach((combination) => {
      map[digits[i]].forEach((char) => {
        updatedCombinations.push(combination + char);
      });
    });

    combinations = updatedCombinations;
  }

  return combinations;
};

console.log(letterCombinations('23'));
console.log(letterCombinations2('23'));
