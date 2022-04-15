const lengthOfLongestSubstringWithoutRepeatingChars = (s) => {
  let result = 0;
  const map = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    map[rightChar] = map[rightChar] + 1 || 1;

    while (map[rightChar] > 1) {
      const leftChar = s[windowStart];
      if (map[leftChar] > 1) {
        map[leftChar]--;
      } else {
        delete map[leftChar];
      }
      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

console.log(lengthOfLongestSubstringWithoutRepeatingChars('abcabcbb'));
// export default lengthOfLongestSubstringWithoutRepeatingChars;
