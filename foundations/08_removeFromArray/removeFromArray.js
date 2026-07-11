const removeFromArray = function(arr, ...toBeRemoved) {
   let filteredArr = [];

   arr.forEach(ele => {
      if (!toBeRemoved.includes(ele)) {
         filteredArr.push(ele);
      }
   });

   return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
