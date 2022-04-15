const lengthOfLongestSubstringKDistinct = (s, k) => {
  let windowStart = 0;
  let soFar = new Map();
  let max = 0;

  for (let windowEnd = 0; windowEnd < s.length; s++) {
    const rightChar = s[windowEnd];
    soFar = soFar[rightChar] + 1 || 1;

    // While window is invalid, increment left pointer until windows becomes valid again. Keep checking max
    while (soFar.size > k) {
      const leftChar = s[windowStart];
      if (soFar.get(leftChar) > 1) {
        soFar.set(leftChar, soFar.get(leftChar) - 1);
      } else {
        soFar.delete(leftChar);
      }

      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
};
export default lengthOfLongestSubstringKDistinct;
