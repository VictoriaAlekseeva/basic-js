const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let encodeStr = '';

  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i+1]) {
      counter++;
    } else {
      encodeStr = (counter == 1) ? (encodeStr + str[i]) : (encodeStr + `${counter}` + str[i])
      counter = 1;
    }

  }

  return encodeStr;
}

module.exports = {
  encodeLine
};
