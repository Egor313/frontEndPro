const actions = ['+', '-', '*', '/'];
const action = prompt('Введіть оператор (+, -, *, /):');


if (!isValidAction(action)) {
    alert('Неправильний оператор');
  } else {
    const operandA = getOperand('A');
    const operandB = getOperand('B');

  
  if (!isOperandValid(operandA) || !isOperandValid(operandB)) {
    alert('Неправильний операнд');
  } else {
    const result = calc(action, operandA, operandB);
    showResult(action, operandA, operandB, result);
  }
}


function isValidAction(action) {
    return actions.includes(action);
}

function getOperand(operandName) {
    return Number(prompt(`Введіть операнд ${operandName}:`));
}

function isOperandValid(operand) {
    return !Number.isNaN(operand);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}  

function calc(action, a, b) {
    let result;
  
    switch (action) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = sub(a, b);
        break;
      case '*':
        result = mul(a, b);
        break;
      case '/':
        result = div(a, b);
        break;
    }
  
    return result;
  }

function showResult(action, a, b, result) {
    alert(`${a} ${action} ${b} = ${result}`);
  }