import diffuse from '../diffuse';

test('should return diffused array', () => {
    const array = [1,2,3,4,5]
    const size = 5
    const key = 2

    expect(diffuse(size, key, array)).toEqual([5, 7, 9, 6, 3]);
  });