const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (typeof(str) !== "string") str = String(str);
  if (typeof(options.addition) !== "string" && options.addition !== undefined) options.addition = String(options.addition);
  let additionArr = new Array(options.additionRepeatTimes).fill(options.addition);
  let additionResult = additionArr.join(options.additionSeparator);
  let repeatedArr = new Array(options.repeatTimes).fill(str + additionResult);
  let result = repeatedArr.join(options.separator);
  return result;
};
  