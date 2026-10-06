const pascal = function (n) {
  if (n == 1) {
    return [1];
  }
  if (n == 2) {
    return [1, 1];
  }

  let inner = pascal(n - 1);
  inner = inner.map((ele, index) => ele + (inner[index + 1] ?? 0));
  inner.pop();

  return [1, inner, 1].flat();
};

// Do not edit below this line
module.exports = pascal;
