function compareMaps(map1, map2) {
  let testVal;
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, val] of map1) {
    testVal = map2.get(key);
    // in cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

const findAllAnagrams = (s, p) => {
  if (p.length > s.length) return [];
  const pMap = new Map();
  const sMap = new Map();
  const result = [];
  for (let i = 0; i < p.length; i++) {
    if (!pMap.get(p[i])) pMap.set(p[i], 1);
    else pMap.set(p[i], pMap.get(p[i]) + 1);

    if (!sMap.get(s[i])) sMap.set(s[i], 1);
    else sMap.set(s[i], sMap.get(s[i]) + 1);
  }

  if (compareMaps(pMap, sMap)) result.push(0);

  let windowStart = 0;
  for (let windowEnd = p.length; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    const leftChar = s[windowStart];
    if (!sMap.get(rightChar)) sMap.set(rightChar, 1);
    else sMap.set(rightChar, sMap.get(rightChar) + 1);

    sMap.set(sMap.get(leftChar) - 1);

    if (sMap.get(leftChar) === 0) sMap.delete(leftChar);
    windowStart++;

    if (compareMaps(sMap, pMap)) result.push(windowStart);
  }

  return result;
};

export default findAllAnagrams;
