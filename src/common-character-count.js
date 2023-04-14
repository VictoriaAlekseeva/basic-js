const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let letterCounterS1 = {};
  let letterCounterS2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (!letterCounterS1[s1[i]]) {
      letterCounterS1[s1[i]] = 1;
    } else letterCounterS1[s1[i]]++;
  }


  for (let i = 0; i < s2.length; i++) {
    if (!letterCounterS2[s2[i]]) {
      letterCounterS2[s2[i]] = 1;
    } else letterCounterS2[s2[i]]++;
  }

  let commonLetters = 0;
  for (let key in letterCounterS1) {
    if (key in letterCounterS2) {
      letterCounterS1[key] > letterCounterS2[key] ? commonLetters += letterCounterS2[key] : commonLetters += letterCounterS1[key]
    }
  }

  return commonLetters;
}

module.exports = {
  getCommonCharacterCount
};
