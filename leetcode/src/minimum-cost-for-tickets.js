var minCostTickets = function (days, costs) {
  let max = Math.max(...days);
  let cache = Array(max + 1).fill(0);

  let travelDays = Array(max + 1);
  for (let i = 0; i < travelDays.length; i++) {
    if (days.includes(i)) {
      travelDays[i] = 1;
    } else {
      travelDays[i] = 0;
    }
  }

  cache[0] = 0;
  for (let i = 1; i < cache.length; i++) {
    if (travelDays[i] === 1) {
      let oneDay = cache[i - 1] + costs[0];
      let sevenDay = !cache[i - 7] ? 0 + costs[1] : cache[i - 7] + costs[1];
      let thirtyDay = !cache[i - 30] ? 0 + costs[2] : cache[i - 30] + costs[2];
      cache[i] = Math.min(oneDay, sevenDay, thirtyDay);
    } else {
      cache[i] = cache[i - 1];
    }
  }

  return cache[max];
};

console.log(minCostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
