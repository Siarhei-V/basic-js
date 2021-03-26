const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isParameterInadequate(sampleActivity) || sampleActivity === undefined || isNaN(sampleActivity) || +sampleActivity <= 0) return false;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  return result > 0 ? result : false;
};

function isParameterInadequate(parameter) {
  return (Number(parameter).toString() !== parameter);
}