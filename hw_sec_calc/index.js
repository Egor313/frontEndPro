
let operator = prompt('Введіть оператор (+, -, *, /):');
let result;

(operator === '+' || operator === '-' || operator === '*' || operator === '/')
    let num1 = Number(prompt('Введіть першу цифру:'));
    let num2 = Number(prompt('Введіть другу цифру:'));

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
      alert(`Введений неправильний оператор. Введіть один із: '+', '-', '*', '/'`);
    };
   
    alert(`Результат : ${result}`);