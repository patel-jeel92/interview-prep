import longestSubstringWithoutRepeatingChars from '../src/longest-substring-without-repeating-characters';

test('should return the length of the longest substring', () => {
  expect(longestSubstringWithoutRepeatingChars('abcabcbb')).toEqual(3);
});
