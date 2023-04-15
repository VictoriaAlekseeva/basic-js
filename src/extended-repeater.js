const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {

  options = Object.create(options);
  let repeatedString = '';

  function repeatString (string, quantity, separator) {
    let multipleString = '';
    for (let i = 0; i < quantity; i++) {
      if (i < (quantity - 1)) {
        multipleString += string + separator;
      } else multipleString += string;
    // multipleString += (i < (quantity - 1)) ? (string + separator) : string;
    }
  return multipleString;
  }


  let add, addRepeatTimes, addSeparator, repeatTimes, separator

  if ('addition' in options) {
    add = options.addition
  } else add = '';
  if ('additionRepeatTimes' in options) {
    addRepeatTimes = options.additionRepeatTimes
  } else addRepeatTimes = 1;
  if ('additionSeparator' in options) {
    addSeparator = options.additionSeparator
  } else addSeparator = '|';
  if ('repeatTimes' in options) {
    repeatTimes = options.repeatTimes
  } else repeatTimes = 1;
  if ('separator' in options) {
    separator = options.separator
  } else separator = '+';

  let string = repeatString (add, addRepeatTimes, addSeparator);

  repeatedString = str + string;

  return (repeatString (repeatedString, repeatTimes, separator))
}

module.exports = {
  repeater
};
