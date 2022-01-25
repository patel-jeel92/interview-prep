const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  try {
    const input = req.body.input.split(' ');
    const output = postFix(input);
    const result = { output: output.toString() };
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => console.log(`Postfix app listening on port ${port}!`));

function postFix(value) {
  // take the last element of the array coming in since that is the operand
  const stack = [];
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    if (
      value[i] === '+' ||
      value[i] === '-' ||
      value[i] === '*' ||
      value[i] === '/'
    ) {
      const num2 = stack.pop();
      const num1 = stack.pop();

      if (value[i] === '+') {
        result = Number(num1) + Number(num2);
        stack.push(result);
      } else if (value[i] === '-') {
        result = Number(num1) - Number(num2);
        stack.push(result);
      } else if (value[i] === '*') {
        result = Number(num1) * Number(num2);
        stack.push(result);
      } else {
        result = Number(num1) / Number(num2);
        stack.push(result);
      }
    } else {
      stack.push(value[i]);
    }
  }
  return stack.pop();
}

module.exports = postFix;
