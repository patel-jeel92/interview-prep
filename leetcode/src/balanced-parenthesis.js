var balancedParenthesis = function (string) {
  // Map to store the matching brackets.
  var map = {
    "{": "}",
    "[": "]",
    "(": ")",
    "<": ">",
  };

  // Declare a stack so you can push to see if the most recent pushed item is equal to the current item.
  var stack = [];
  for (let char of string) {
    // If its an opening bracket, push the closing bracket to the stack
    if (char in map) {
      stack.push(map[char]);
    } else {
      // Pop off the stack and check if the brackets match. If they do, then continue else, return false immediately
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(balancedParenthesis("[()]{}{[()()]()}"));
