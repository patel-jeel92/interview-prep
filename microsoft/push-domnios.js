const pushDominos = (dominoes) => {
  const dom = dominoes.split('');
  const queue = [];

  for (const [index, domino] of dom.entries()) {
    if (domino !== '.') {
      queue.push([index, domino]);
    }
  }

  while (queue.length) {
    const [index, domino] = queue.shift();

    if (domino === 'L') {
      if (index > 0 && dom[index - 1] === '.') {
        queue.push([index - 1, 'L']);
        dom[index - 1] = 'L';
      }
    } else if (domino === 'R') {
      if (index + 1 < dom.length && dom[index + 1] === '.') {
        if (index + 2 < dom.length && dom[index + 2] === 'L') {
          queue.shift();
        } else {
          queue.push([index + 1, 'R']);
          dom[index + 1] = 'R';
        }
      }
    }
  }
  return dom.join('');
};
export default pushDominos;
