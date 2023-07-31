'use strict'

const FORM_SELECTOR = '#todoForm';
const TODO_LIST = '#todoList';
const CHECKBOX_CLASS = 'checkbox';
const DELETE_BTN_CLASS = 'delete_btn';
const TODO_ITEM_CLASS = 'todo__item';


const form = document.querySelector(FORM_SELECTOR);
const todoList = document.querySelector(TODO_LIST);

  
form.addEventListener('submit', onFormSubmit);
todoList.addEventListener('click', onTodoListClick);
  

function onFormSubmit(e) {
    e.preventDefault();

    const formElements = form.elements;
    const todo = getFormData(formElements);

    if (!isTodoValid(todo)) {
        showError('Будь ласка, заповніть всі поля коректно!');
        return;
    }

    renderTodo(todo)
    clearFormData(formElements)
}

function onTodoListClick(e) {
    const todoEl = getTodoItem(e.target);

    if(todoEl) {
        if (isDeleteBtn(e.target)) {
            removeTodo(todoEl)
        } else if (isChecked(e.target)) {
            toggleCheckBox(todoEl)
        }
    }
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

function getTodoItem(el) {
    return el.closest(`.${TODO_ITEM_CLASS}`)
}

function isDeleteBtn(el) {
    return el.closest(`.${DELETE_BTN_CLASS}`)
}

function removeTodo(el) {
    el.remove()
}

function isChecked(el) {
    return el.closest(`.${CHECKBOX_CLASS}`)
}

function toggleCheckBox(el) {
    return el.classList.toggle(CHECKBOX_CLASS)
}



