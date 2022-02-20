const searchInRotatedSortedArray = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // left portion
    if (nums[left] <= nums[mid]) {
      if (target > nums[mid]) {
      }
    } else {
      if (target > nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};

export default searchInRotatedSortedArray;
