'use strict'

const DELETE_BTN_CLASS = 'delete_btn';
const TODO_ITEM_CLASS = 'todo__item';
const TODO_LIST = 'todoList';
const MSG_BUTTON = 'msgButton';
const INPUT_AREA = 'inputArea';
const CHECKBOX_CLASS = 'checkbox';

const todoList = document.querySelector(`#${TODO_LIST}`);
const msgButton = document.querySelector(`#${MSG_BUTTON}`);
const input = document.querySelector(`#${INPUT_AREA}`);
  
msgButton.addEventListener('click', onMsgBtnClick);
todoList.addEventListener('click', onTodoListClick);
  
function onMsgBtnClick() {
    const todo = getTodoData();

    if (!isTodoValid(todo)) {
        showError('Будь ласка, заповніть всі поля коректно!');
        return;
    }

    renderTodo(todo)
    clear()
}

function onTodoListClick(e) {
    const todoEl = getTodoItem(e.target);
    const classListEl = e.target.classList;

    if(todoEl) {
        if (classListEl.contains(DELETE_BTN_CLASS)) {
            removeTodo(todoEl)
        } else if (classListEl.contains(CHECKBOX_CLASS)) {
            todoEl.classList.toggle(CHECKBOX_CLASS, e.target.checked)
        }
    }
}
  
function getTodoData () {
  return { message: input.value}
}

  
function isTodoValid (todo) {
  return  !isEmpty(todo.message);
}


function renderTodo (todo) {
    const html = generateTemplate(todo);

    todoList.insertAdjacentHTML('beforeend', html)
}

function generateTemplate(todo) {
    return `
        <li class='${TODO_ITEM_CLASS}'>
            <input type='checkbox' class='${CHECKBOX_CLASS}'>
            <span class='todo__message'>${todo.message}</span>
            <button class='${DELETE_BTN_CLASS}' type='button'>Видалити</button>
        </li>
    `;
}

function clear() {
    input.value = '';
}

function removeTodo(el) {
    el.remove()
}

function getTodoItem(el) {
    return el.closest(`.${TODO_ITEM_CLASS}`)
}


