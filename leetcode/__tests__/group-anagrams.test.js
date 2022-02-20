import groupAnagrams from '../src/group-anagrams';

test('should group all anagrams together', () => {
  const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const output = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
  expect(groupAnagrams(input)).toEqual(output);
});
