const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Отбираем и сортируем числа, отличные от -1
  const sortedHeights = arr.filter((x) => x !== -1).sort((a, b) => a - b);

  let index = 0; // Индекс для отсортированных чисел
  return arr.map((x) => (x === -1 ? x : sortedHeights[index++]));
}

module.exports = {
  sortByHeight
};
