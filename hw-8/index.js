'use strict'

const calculator = createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe');
console.log(calculator.get());
calculator.reset();
console.log(calculator.get());


function createCalculator(baseValue) {
    let result = baseValue;

    function isValidNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }
     
    return {
      add: (num) => {
        if (isValidNumber(num)) {
          result += num;  
        }
      },
      sub: (num) => {
        if (isValidNumber(num)) {
          result -= num;
        }
      },
      reset: () => {
        result = baseValue;
      },
      set: (newValue) => {
        if (isValidNumber(newValue)) {
            result = newValue;
        }
      },
      get: () => {
        return result;
      }
    };
  }
  