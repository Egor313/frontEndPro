'use strict'

const ul = document.querySelector('#todoList');
const btn = document.querySelector('#msgButton');
const input = document.querySelector('#msgInput');
  
btn.addEventListener('click', onMsgBtnClick);
  
function onMsgBtnClick() {
    const todo = getTodoData();

    if (!isTodoValid(todo)) {
        alert('Поле сообщение не должно быть пустым');
        return;
    }

    renderTodo(todo)
    clear()
}
   
function getTodoData () {
  return { message: input.value.trim()}
}
  
function isTodoValid (todo) {
  return todo.message !== '';
}
function renderTodo (todo) {
    const newItem = document.createElement('li');
    newItem.textContent = todo.message;
    ul.append(newItem);
}

function clear() {
    input.value = '';
}

