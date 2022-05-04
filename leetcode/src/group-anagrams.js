const groupAnagrams = (strs) => {
  const sortedStrings = strs.map((item) => item.split('').sort().join(''));
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    if (!map.get(sortedStrings[i])) map.set(sortedStrings[i], [word]);
    else map.get(sortedStrings[i]).push(word);
  }

  return map.values();
};
console.log(groupAnagrams(['abc', 'bca', 'cba', 'abz', 'zba']));
