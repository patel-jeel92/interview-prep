const nonOverlappingIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = 0;

  // Since we sorted the interval above, use the first intervals end value as the prevEnd
  let prevEnd = intervals[0][1];

  // Loop through all the intervals
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    // If the current interval starts on or after the previous ends, then just update the prevEnd
    // to the new end
    if (start >= prevEnd) {
      prevEnd = end;
    }

    // Overlap happened, increment result and "remove" the interval that ends later. Meaning
    // set the prev end to one that ends first.
    else {
      result++;
      prevEnd = Math.min(end, prevEnd);
    }
  }

  return result;
};
export default nonOverlappingIntervals;
