const factorial = function (n) {
  if (n == 0 || n == 1) {
    return 1;
  } else if (n - 1 == 1) {
    return 2;
  } else if (n < 0 || !(typeof n == "number") || !(n % 1 == 0)) {
    return undefined;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = factorial;
