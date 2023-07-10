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
    let num = 0;

    if(isValidNumber(baseValue)) {
        num = baseValue
    }
     
    return {
      add: (n) => {
        if (isValidNumber(n)) {
            num += n;  
        }
      },
      sub: (n) => {
        if (isValidNumber(n)) {
            num -= n;
        }
      },
      reset: () => {
        num = baseValue;
      },
      set: (n) => {
        if (isValidNumber(n)) {
            num = n;
        }
      },
      get: () => num,
    };
  }

  function isValidNumber(num) {
    return typeof num === 'number' && !isNaN(num);
 }
 