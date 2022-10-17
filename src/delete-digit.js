const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let strArray = Array.from(String(n));
  console.log(strArray);

  let max = Math.max(...strArray);
  let minimum = Math.min(...strArray);
  
  let posMin = strArray.indexOf(String(minimum));
  let posMax = strArray.indexOf(String(max));

  if (strArray[0] == max) {

  strArray.splice(posMin, 1);


  } else {
    strArray.splice((posMax-1), 1);


  }
  return +strArray.join("");
}

module.exports = {
  deleteDigit
};
