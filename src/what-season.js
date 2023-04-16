const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  
  if (!(Date.parse(`${date}`))) throw new Error ("Invalid date!")

  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  let month = date.getMonth();

  if ((month == 11) || (month < 2)) return seasons[0];
  if ((month >= 2) && (month < 5)) return seasons[1];
  if ((month >= 5) && (month < 8)) return seasons[2];
  if ((month >= 8) && (month < 11)) return seasons[3];
}

module.exports = {
  getSeason
};
