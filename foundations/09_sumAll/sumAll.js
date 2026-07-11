const sumAll = function (lower, upper) {
  if (
    !(typeof lower === "number" && typeof upper === "number") ||
    !(lower % 1 == 0 && upper % 1 == 0) ||
    !(lower >= 0 && upper >= 0)
  ) {
    return "ERROR";
  }

  if (upper - lower < 0) {
    let temp = upper;
    upper = lower;
    lower = temp;
  }

  let sum = 0;
  for (let i = lower; i <= upper; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
