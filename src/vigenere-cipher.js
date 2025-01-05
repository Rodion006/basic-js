const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // Определяем тип машины: прямая или обратная
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 'encrypt');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 'decrypt');
  }

  process(message, key, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fullKey = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();

    for (let char of message) {
      if (alphabet.includes(char)) {
        const messageIndex = alphabet.indexOf(char);
        const keyChar = fullKey[keyIndex++];
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);

        let newIndex;
        if (mode === 'encrypt') {
          newIndex = (messageIndex + keyIndexInAlphabet) % 26;
        } else {
          newIndex = (messageIndex - keyIndexInAlphabet + 26) % 26;
        }

        result += alphabet[newIndex];
      } else {
        result += char; // Сохраняем любые символы, которые не являются буквами
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
