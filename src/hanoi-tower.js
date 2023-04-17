const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');

  let turns = Math.pow(2, disksNumber) - 1;
  let secInHour = 60 * 60;

  let seconds = Math.floor(turns/turnsSpeed * secInHour);

  let calculate = {}
  calculate.turns = turns;
  calculate.seconds = seconds;

  return calculate;

}

module.exports = {
  calculateHanoi
};
