import twoSum from '../src/two-sum';

test('should return [0, 1]', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;

  expect(twoSum(nums, target)).toEqual([0, 1]);
});
