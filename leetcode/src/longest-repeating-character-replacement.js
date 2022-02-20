const longestRepeatingCharacterReplacement = (s, k) => {
  let windowStart = 0;
  let maxResult = Number.NEGATIVE_INFINITY;
  const map = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];

    if (!map.get(currentChar)) map.set(currentChar, 1);
    else map.set(currentChar, map.get(currentChar) + 1);

    while (windowEnd - windowStart + 1 - Math.max(...map.values()) > k) {
      if (!map.get(currentChar)) map.delete(currentChar);
      else map.set(currentChar, map.get(currentChar) - 1);
      windowStart++;
    }

    maxResult = Math.max(maxResult, windowEnd - windowStart + 1);
  }

  return maxResult;
};

export default longestRepeatingCharacterReplacement;
