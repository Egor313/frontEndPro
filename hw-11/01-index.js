'use strict'

if (!Array.prototype.hasOwnProperty('max')) {
    Array.prototype.max = function() {
      if (this.length === 0) {
        return undefined;
      }
  
    let maxElement = this[0];
  
    for (let i = 1; i < this.length; i++) {
      if (this[i] > maxElement) {
        maxElement = this[i];
      }
    }
  
      return maxElement;
    };
  }
  
  const numbers = [5, 7, 8, 12, 4, 12, 41, 48, 15, 47, 30];
  console.log(`Max number is: ${numbers.max()}`);
  