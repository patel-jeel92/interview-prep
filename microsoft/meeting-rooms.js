const meetingRooms = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    const interval1 = intervals[i];
    const interval2 = intervals[i + 1];

    if (interval1.end > interval2.start) {
      return false;
    }
  }
  return true;
};

export default meetingRooms;
