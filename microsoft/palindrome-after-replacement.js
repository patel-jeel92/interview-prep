const createPalindrome = (S) => {
  const temp = S.split('');
  let left = 0;
  let right = temp.length - 1;

  while (left < right) {
    if (temp[left] === temp[right] && temp[right] !== '?') {
      // eslint-disable-next-line no-continue
      continue;
    } else if (temp[left] === temp[right] && temp[right] === '?') {
      // eslint-disable-next-line no-multi-assign
      temp[left] = temp[right] = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    } else if (temp[right] === '?' || temp[left] === '?') {
      if (temp[left] === '?') {
        temp[left] = temp[right];
      } else {
        temp[right] = temp[left];
      }
    } else {
      return 'NO';
    }

    left++;
    right--;
  }
  return temp.join('');
};

console.log(createPalindrome('?a?'));
