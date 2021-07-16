var maxProfit = function (prices) {
  let max = 0;
  let minPrice = Number.POSITIVE_INFINITY;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      max = Math.max(max, prices[i] - minPrice);
    }
  }

  return max;
};

export default maxProfit;
