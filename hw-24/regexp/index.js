let regexp = /love/;
let regexpInc = /ing$/;

console.log(regexp.test('I love JavaScript'));
console.log(regexp.test('I JavaScript'));

console.log(regexpInc.test('Good morning'));
console.log(regexpInc.test('Good morning!'));