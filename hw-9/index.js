'use strict'

function Calculator(base) {
   this.base = isValidNumber(base) ? base : 0;
   this.num = this.base;
}

Calculator.prototype.add = function(n) {
    if (isValidNumber(n)) {
        this.num += n;
    }
};

Calculator.prototype.sub = function(n) {
    if (isValidNumber(n)) {
        this.num -= n;
    }
};

Calculator.prototype.set = function(n) {
    if (isValidNumber(n)) {
        this.num = n;
    }
};

Calculator.prototype.reset = function() {
    this.num = this.base;
};

Calculator.prototype.get = function() {
    return this.num;
};


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
