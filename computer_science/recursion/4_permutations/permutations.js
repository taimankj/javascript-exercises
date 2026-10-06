const permutations = function (args) {
  // base case - if array length is 0, return an empty array
  if (args.length == 0) {
    return [args];
  }

  // create a new empty array
  let finalPermutations = [];

  // loop through args
  // for each element, concat it with the permutations of the rest of the elements
  // with these new permutations, push it onto the perms array
  args.forEach((e) => {
    let subPermutations = permutations(args.filter((f) => f != e));

    subPermutations.forEach((perm) => {
      perm.unshift(e);
    });

    finalPermutations.push(subPermutations);
  });

  // return the perms array
  return finalPermutations.flat();
};

// Do not edit below this line
module.exports = permutations;
