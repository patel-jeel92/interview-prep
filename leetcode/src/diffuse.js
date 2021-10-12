function diffuseHelper(size, key, message) {
  const result = [];
  for (let i = 0; i < key; i++) {
    message.push(message[i]);
  }

  for (let i = 0; i < size; i++) {
    const test = [...message];
    const arr = test.slice(i + 1, key + i + 1);
    result[i] = arr.reduce((acc, curr) => acc + curr);
  }

  return result;
}

export default function diffuse(size, key, message) {
  if (key > 0) {
    return diffuseHelper(size, key, message);
  }

  message = message.reverse();
  key *= -1;
  return diffuseHelper(size, key, message).reverse();
}
