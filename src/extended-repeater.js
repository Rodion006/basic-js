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
  str = String(str); // Приводим к строке
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const additionStr = Array(additionRepeatTimes)
    .fill(String(addition)) // Приводим к строке и заполняем массив
    .join(additionSeparator); // Объединяем с разделителем

  const result = Array(repeatTimes)
    .fill(str + additionStr) // Формируем полные повторения
    .join(separator); // Объединяем с разделителем

  return result;
}

module.exports = {
  repeater
};
