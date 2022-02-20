const longestSubstringWithoutRepeatingChars = (s) => {
  let windowStart = 0;
  let maxWindowLength = Number.NEGATIVE_INFINITY;
  const map = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];
    if (!map.get(currentChar)) map.set(currentChar, 1);
    else map.set(currentChar, map.get(currentChar) + 1);

    while (map.get(currentChar) > 1) {
      if (map.get(currentChar)) map.set(currentChar, map.get(currentChar) - 1);
      else map.delete(currentChar);

      windowStart++;
    }

    maxWindowLength = Math.max(maxWindowLength, windowEnd - windowStart + 1);
  }

  return maxWindowLength;
};

export default longestSubstringWithoutRepeatingChars;
