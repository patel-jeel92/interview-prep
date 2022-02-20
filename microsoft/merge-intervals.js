const mergeIntervals = (intervals) => {
  if (intervals.length === 1) {
    return intervals;
  }
  // sort
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const lastEnd = result[result.length - 1][1];
    // second interval starts before first one ends
    if (lastEnd >= start) {
      result[result.length - 1][1] = Math.max(lastEnd, end);
    } else {
      result.push([start, end]);
    }
  }
  return result;
};

export default mergeIntervals;
