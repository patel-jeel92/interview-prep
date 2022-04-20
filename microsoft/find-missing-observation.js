const missingObservations = (rolls, n, mean) => {
  const m = rolls.length;

  // find the n total by multiplying the mean by the amount of rolls and subtracting the total we have so far
  let nTotal =
    mean * (n + m) - rolls.reduce((partialSum, a) => partialSum + a, 0);

  const result = [];

  // if nTotal is less than n or nTotal > n*6 return empty array.
  // because if nTotal is 1 and we have 2 rolls left we wont be able to get the result or
  // if nTotal is 8 and we only have 1 roll left the max we can roll is 6
  if (nTotal < n || nTotal > n * 6) {
    return [];
  }

  while (nTotal) {
    // Here we have cant let nTotal dip below n. SO we always take the min of
    // max dice value (6) or nTotal - n + 1
    const dice = Math.min(6, nTotal - n + 1);
    result.push(dice);
    nTotal -= dice;
    n--;
  }
  return result;
};
