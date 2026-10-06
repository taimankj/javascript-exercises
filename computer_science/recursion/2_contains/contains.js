const contains = function (obj, val) {
  for (const value of Object.values(obj)) {
    if (Object.prototype.toString.call(value) === "[object Object]") {
      if (contains(value, val)) {
        return true;
      }
    }
    if (value === val) {
      return true;
    }
    if (Object.is(val, NaN)) {
      return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
