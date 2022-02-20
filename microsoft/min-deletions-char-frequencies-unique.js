const minDeletionsToMakeCharFrequenciesUnique = (s) => {
  let map = new Map();
  const uniqueVal = [];
  let count = 0;
  for (const char of s) {
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  for (const [key] of map) {
    while (map.get(key) > 0 && uniqueVal.includes(map.get(key))) {
      count += 1;
      map.set(key, map.get(key) - 1);
    }
    if (!uniqueVal.includes(map.get(key))) {
      uniqueVal.push(map.get(key));
    }
  }

  return count;
};

console.log(minDeletionsToMakeCharFrequenciesUnique('bbcebab'));
