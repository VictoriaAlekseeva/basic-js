const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let gameArray = new Array(matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    gameArray[i] = new Array(matrix.length);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let num = 0;

      if (((i-1) >= 0) && ((j-1)>=0) && (matrix[i-1][j-1] == true)) num++;
      if (((i-1) >= 0) && (matrix[i-1][j] == true)) num++;
      if (((i-1) >= 0) && ((j + 1) < matrix[i].length) && (matrix[i-1][j+1] == true)) num++;
      if (((j-1) >= 0) && (matrix[i][j-1] == true)) num++;
      if (((j + 1) < matrix[i].length) && (matrix[i][j+1] == true)) num++;
      if (((i + 1) < matrix.length) && ((j - 1) >= 0) && (matrix[i+1][j-1] == true)) num++;
      if (((i + 1) < matrix.length) && (matrix[i+1][j] == true)) num++;
      if (((i + 1) < matrix.length) && ((j + 1) < matrix[i].length) && (matrix[i+1][j+1] == true)) num++;

      gameArray[i][j] = num;
    }
  }

  return gameArray;

}

module.exports = {
  minesweeper
};
