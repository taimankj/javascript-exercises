const totalIntegers = function (args) {
  if (!(typeof args === "object")) {
    return;
  }
  let count = 0;
  let values = Object.values(args);
  for (const val of values) {
    count += checkInt(val, totalIntegers);
  }
  return count;
};

function checkInt(n, cb, count) {
  if (Number.isInteger(n)) {
    return 1;
  } else if (typeof n === "object" && n != null) {
    return cb(n);
  } else {
    return 0;
  }
}

// Do not edit below this line
module.exports = totalIntegers;
