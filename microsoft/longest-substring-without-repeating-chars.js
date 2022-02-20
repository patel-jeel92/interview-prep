const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let right = 0;
  const set = new Set();
  let maxSubStringLength = 0;

  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxSubStringLength = Math.max(maxSubStringLength, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxSubStringLength;
};

export default lengthOfLongestSubstring;
