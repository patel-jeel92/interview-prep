const trappingWater = (heights) => {
  if (heights.length < 0) return 0;
  let leftMax = 0;
  const rightMax = 0;
  let left = 0;
  let right = heights.length - 1;
  let waterCount = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, heights[left]);
      waterCount += leftMax - heights[left];
    } else {
      right--;
      leftMax = Math.max(rightMax, heights[right]);
      waterCount += rightMax - heights[right];
    }
  }
  return waterCount;
};
export default trappingWater;
