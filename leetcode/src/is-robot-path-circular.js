export default function isCircular(instructions) {
  let x = 0;
  let y = 0;
  const instruction = [...instructions];
  let direction = 'north';

  for (let i = 0; i < instruction.length; i++) {
    if (direction === 'north') {
      if (instruction[i] === 'G') {
        y++;
      } else if (instruction[i] === 'L') {
        direction = 'west';
      } else {
        direction = 'east';
      }
    } else if (direction === 'east') {
      if (instruction[i] === 'G') {
        x++;
      } else if (instruction[i] === 'L') {
        direction = 'north';
      } else {
        direction = 'south';
      }
    } else if (direction === 'south') {
      if (instruction[i] === 'G') {
        y--;
      } else if (instruction[i] === 'L') {
        direction = 'east';
      } else {
        direction = 'west';
      }
    } else {
      if (instruction[i] === 'G') {
        x--;
      } else if (instruction[i] === 'L') {
        direction = 'south';
      } else {
        direction = 'north';
      }
    }
  }

  if (direction === 'north' && x === 0 && y === 0) {
    return 'YES';
  }
  return 'NO';
}

// console.log(isCircular('GGLRLRG'))
