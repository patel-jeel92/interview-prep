function checkPalindrome(str) {
  // find the length of a string
  const len = str.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (str[i] !== str[len - i - 1]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}

console.log(checkPalindrome('A man, a plan, a canal: Panama'));
