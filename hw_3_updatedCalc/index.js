const actions = {'+': add, '-': sub, '*': mul, '/': div};
const actionsList = Object.keys(actions);
const action = prompt(`Введіть оператор ${actionsList.join(', ')} :`);


if (!isValidAction(action)) {
    alert('Неправильний оператор');
  } else {
    const operandA = getOperand('A');
    const operandB = getOperand('B');

  
  if (!isOperandValid(operandA) || !isOperandValid(operandB)) {
    alert('Неправильний операнд');
  } else {
    const result = calc(action, operandA, operandB);

    if (isFinite(result)) {
      showResult(action, operandA, operandB, result);
    } else {
      alert('Ділення на 0');
    }
  }
}


function isValidAction(action) {
    return actionsList.includes(action);
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
  return actions[action](a, b);
}

function showResult(action, a, b, result) {
    alert(`${a} ${action} ${b} = ${result}`);
  }