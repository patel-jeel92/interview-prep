const permuteUnique = function (nums) {
  const resultArr = [];
  const map = new Map();

  for (const item of nums) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  function helper(newNums, permutedValueArr) {
    if (permutedValueArr.length === nums.length) {
      // if the length of the permute array == length of original array
      resultArr.push([...permutedValueArr]); // push the copy of the new permuted array
      return;
    }

    for (const [key, val] of map) {
      // loop through the map

      if (val > 0) {
        // making sure the map's key's value is > 0

        // choose
        permutedValueArr.push(key);
        newNums.set(key, newNums.get(key) - 1);

        // explore
        helper(newNums, permutedValueArr);

        // un choose
        newNums.set(key, newNums.get(key) + 1);
        permutedValueArr.pop();
      }
    }
  }

  helper(map, []);

  return resultArr;
};

console.log(permuteUnique([1, 1, 2]));
