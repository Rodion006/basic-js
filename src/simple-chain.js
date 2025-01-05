const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this; // Для цепочки вызовов
  },

  removeLink(position) {
    if (
      typeof position !== 'number' || 
      position < 1 || 
      position > this.chain.length || 
      !Number.isInteger(position)
    ) {
      this.chain = []; // Сброс цепочки
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this; // Для цепочки вызовов
  },

  reverseChain() {
    this.chain.reverse();
    return this; // Для цепочки вызовов
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = []; // Сброс цепочки
    return result;
  }
};

module.exports = {
  chainMaker
};
