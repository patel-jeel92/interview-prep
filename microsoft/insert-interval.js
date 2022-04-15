const insertInterval = (intervals, newInterval) => {
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    // If new interval ends before the first interval starts. Just append to the beginning
    // and return the rest of the intervals
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval, ...intervals);
      return result;
    }

    // If new interval starts after the current interval ends, its not overlapping with the current interval
    // So just add the current interval to the result
    if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    }

    // The new interval overlaps with the current interval. Take the min of start and max of end
    else {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1]),
      ];
    }
  }
  result.push(newInterval);
  return result;
};

export default insertInterval;
