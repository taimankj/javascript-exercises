const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((runningSum, currentNum) => runningSum + currentNum, 0);
};

const multiply = function (numbers) {
  return numbers.reduce(
    (runningProd, currentNum) => runningProd * currentNum,
    1,
  );
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  return num1 == 0 ? 1 : num1 * factorial(num1 - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
