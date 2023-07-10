'use strict'

function Calculator(base) {
   this.base = isValidNumber(base) ? base : 0;
   this.num = isValidNumber(base) ? base : 0;

   this.add = function(n) {
       if (isValidNumber(n)) {
           this.num += n;
       }
   };

   this.sub = function(n) {
       if (isValidNumber(n)) {
           this.num -= n;
       }
   };

   this.set = function(n) {
       if (isValidNumber(n)) {
           this.num = n;
       }
   };

   this.reset = function() {
       this.num = this.base;
   };

   this.get = function() {
       return this.num;
   };
}

function isValidNumber(num) {
   return typeof num === 'number' && !isNaN(num);
}

const calculator = new Calculator(100);

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
