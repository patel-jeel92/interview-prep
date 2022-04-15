const findMinInRotatedSortedArray = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  let min = nums[0];
  while (l <= r) {
    // already sorted array. Just compare if the left most is the minimum number
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }

    // find the mid point
    const mid = Math.floor((l + r) / 2);

    // Check if the mid point is the minimum number
    min = Math.min(min, nums[mid]);

    //
    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return min;
};

export default findMinInRotatedSortedArray;
