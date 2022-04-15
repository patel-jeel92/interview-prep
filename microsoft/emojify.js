const emojify = (message, emoji) => {
  try {
    let input = String(message);

    if (input.indexOf(' ') <= 0) {
      return 'invalid string';
    }

    input = input.replace(/ /g, emoji);
    return input;
  } catch (err) {
    return 'invalid string';
  }
};

console.log(emojify({ hello: 'world', foo: { bar: { baz: 'x' } } }, '😀 '));
console.log(emojify('Thisisateststring', '😀 '));
