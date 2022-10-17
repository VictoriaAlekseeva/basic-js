const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let arraysCounter;

    let deepCounter = 1;

      for (let el of arr) {
        arraysCounter = 1;
        if (Array.isArray(el)){
          arraysCounter += this.calculateDepth(el);
        }

        if (deepCounter < arraysCounter) {
          deepCounter = arraysCounter
        }
      }
    return deepCounter;
  }
}

module.exports = {
  DepthCalculator
};
