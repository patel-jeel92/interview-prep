const maxLengthOfstrsnagramGroup = (strs) => {
  // sort all the words in our input array
  const sortedStrings = strs.map((word) => word.split('').sort().join(''));

  // Create a hash to keep track of grouped anagrams where the key will be the sorted word and the value will be an array with anagrams of that key
  const hash = new Map();

  // Value to keep track of the max length of the arrays
  let maxVal = 0;

  // Loop through our input strings and check if the sorted word is in the hash at a particular index.
  // If its not, add a new value in our hash with the key being the sorted word and the value being an array with the current input string
  for (let i = 0; i < strs.length; i++) {
    if (!hash.get(sortedStrings[i])) {
      hash.set(sortedStrings[i], [strs[i]]);
    } else {
      hash.set(hash.get(sortedStrings[i]), strs[i]);
    }
  }

  // In the end just loop through our hash values and find the length of the longest array
  for (const [_, value] of hash) {
    maxVal = Math.max(maxVal, value.length);
  }

  return maxVal;
};
