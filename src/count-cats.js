const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  arr.forEach(element => {
    result += element.filter(item => item === '^^').length;
  });
  return result;
};
