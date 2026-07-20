const findTheOldest = function (people) {
  return people.reduce((runningObj, currentObj) => {
    if (Object.keys(runningObj).length == 0) {
      return currentObj;
    }

    if (!("yearOfDeath" in runningObj) || !("yearOfDeath" in currentObj)) {
      if (runningObj.yearOfBirth <= currentObj.yearOfBirth) {
        return runningObj;
      } else {
        return currentObj;
      }
    }

    let runningObjYears = runningObj.yearOfDeath - runningObj.yearOfBirth;
    let currentObjYears = currentObj.yearOfDeath - currentObj.yearOfBirth;

    return runningObjYears >= currentObjYears ? runningObj : currentObj;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
