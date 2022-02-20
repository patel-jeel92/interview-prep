import longestRepeatingCharacterReplacement from '../src/longest-repeating-character-replacement';

test('should return the length of the longest substring', () => {
  expect(longestRepeatingCharacterReplacement('ABABBA', 2)).toEqual(5);
});
