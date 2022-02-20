const meetingRoomsTwo = (meetings) => {
  // sort
  meetings.sort((a, b) => a[0] - b[0]);
  let s = 0;
  let e = 0;
  let count = 0;
  let result = 0;
  const starts = meetings.map((x) => x[0]);
  const ends = meetings.map((x) => x[1]);

  while (s < meetings.length) {
    if (starts[s] < ends[e]) {
      s += 1;
      count += 1;
    } else {
      e += 1;
      count -= 1;
    }

    result = Math.max(result, count);
  }

  return result;
};

export default meetingRoomsTwo;
