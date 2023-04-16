const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let newArr = arr.slice();

  let length = newArr.length;

  for (let i = 0; i < length; i++) {
    if ((i === 0) && ((newArr[i] === '--double-prev') || (newArr[i] === '--discard-prev')))  {
      newArr.splice(0, 1);
      continue;
    }

    if ((i === (length - 1)) && ((newArr[length - 1] === '--double-next') || (newArr[i] === '--discard-next'))) {
      newArr.splice(-1, 1);
      continue;
    }

    if (newArr[i] == '--double-prev') {
      newArr.splice(i, 1, newArr[i-1]);
      continue;
    }

    if (newArr[i] == '--double-next') {
      newArr.splice(i, 1, newArr[i+1]);
      continue;
    }

    if ((newArr[i] == '--discard-prev')) {
      newArr.splice((i - 1), 2);
      i = i - 2;
      continue;
    }

    if (newArr[i] == '--discard-next') {
      if ((newArr[i+2] == '--discard-prev') || (newArr[i+2] == '--double-prev')) {
        newArr.splice((i + 2), 1);
      }

      newArr.splice(i, 2);
      i = i - 1;
      continue;
    }

    length = newArr.length;
  }



  return newArr;

}

module.exports = {
  transform
};
