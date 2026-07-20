const palindromes = function (str) {
  if (str.length == 1) {
    return true;
  }

  let newStr = str.match(/[\s,.!]+/)
    ? str
        .split(/[\s,.!]+/)
        .join("")
        .toLowerCase()
    : str.toLowerCase();

  let firstChar = newStr.charAt(0);
  let lastChar = newStr.charAt(newStr.length - 1);

  if (firstChar === lastChar) {
    return newStr.length == 2
      ? true
      : palindromes(newStr.slice(1, newStr.length - 1));
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
