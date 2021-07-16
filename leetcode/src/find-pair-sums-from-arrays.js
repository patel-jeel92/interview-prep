function pairSum(value) {
  var lines = value.split("\n");
  var input = [];
  for (var i = 0; i < lines.length; i++) {
    input.push(lines[i]);
  }

  // create an array to hold the final result
  let result = [];
  let map = new Map();

  // Grab out to the first line as our target.
  let target = parseInt(input.shift());

  // Split the foreground and background pairs by ','
  let foregroundPairs = input[0].split(",");
  let backgroundPairs = input[1].split(",");

  // Create respective arrays of the same size as the number of pairs we have and fill it with null. Idea is to fill element
  // at index taken from the pair with the value.
  let foregroundArray = new Array(foregroundPairs.length);
  let backgroundArray = new Array(backgroundPairs.length);

  // Split the pairs by '|' and fill the array, the first value is the index and the second value if the element.
  for (let i = 0; i < foregroundPairs.length; i++) {
    let pair = foregroundPairs[i].split("|");
    foregroundArray[parseInt(pair[0])] = parseInt(pair[1]);
  }

  for (let i = 0; i < backgroundPairs.length; i++) {
    let pair = backgroundPairs[i].split("|");
    backgroundArray[parseInt(pair[0])] = parseInt(pair[1]);
  }

  // Insert all elements of first array in a map.
  for (let i = 0; i < foregroundArray.length; i++) {
    if (foregroundArray[i] !== undefined) {
      map.set(foregroundArray[i], i);
    }
  }

  // loop through the second array and check is the difference is already in the map. if it is, then
  // return the kep and the element.
  for (let j = 0; j < backgroundArray.length; j++) {
    if (backgroundArray[j] !== undefined) {
      var difference = target - backgroundArray[j];
      if (map.has(difference)) {
        result.push(`${map.get(difference)}|${j}`);
      }
    }
  }
  console.log(result);
}

console.log(pairSum("16 \n2|7,3|14\n2|10,3|14"));
console.log(pairSum("10 \n1|3,2|5,3|7,4|10\n1|2,2|3,3|4,4|5"));
