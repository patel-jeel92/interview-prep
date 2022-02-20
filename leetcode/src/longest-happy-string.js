const longestHappyString = (a, b, c) => {
  const map = {
    a,
    b,
    c,
  };
  const sort = () =>
    Object.keys(map).sort((key1, key2) => map[key2] - map[key1]);
  let s = '';
  const addKey = (key) => {
    if (map[key] > 1) {
      map[key] -= 2;
      s += key + key;
    } else if (map[key] === 1) {
      map[key] -= 1;
      s += key;
    }
  };
  while (map.a > 0 || map.b > 0 || map.c > 0) {
    const [key1, key2] = sort();
    if (map[key2] === 0) {
      addKey(key1);
      return s;
    }
    if (map[key1] / map[key2] >= 2) {
      map[key1] -= 2;
      s += key1 + key1;
      map[key2] -= 1;
      s += key2;
    } else {
      addKey(key1);
      addKey(key2);
    }
  }

  return s;
};
console.log(longestHappyString(2, 3, 3));

// export default longestHappyString;
