'use strict'
import { Api } from '../lib-api/Api.js';
import { todoUrl } from '../lib-api/url.js';
import { 
    getFormData,
    clearFormData,
    isEmpty,
    showError,
} from '../lib-module/index.js';


const FORM_SELECTOR = '#todoForm';
const UL_SELECTOR = '#todoList';
const DONE_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete_btn';
const TODO_ITEM_CLASS = 'todoItem';

const todoApi = new Api(todoUrl);
const form = document.querySelector(FORM_SELECTOR);
const ul = document.querySelector(UL_SELECTOR);
let todoList = [];

  
form.addEventListener('submit', onFormSubmit);
ul.addEventListener('click', onTodoListClick);
  
init()

function init() {
    todoApi.getList()
    .then((list) => {
        todoList = list
        renderTodoList(list)
    })
    .catch(e => showError(e.message))
}


function onFormSubmit(e) {
    e.preventDefault();

    const formElements = form.elements;
    const todo = getFormData(formElements);

    if (!isTodoValid(todo)) {
        showError('Будь ласка, заповніть всі поля коректно!');
        return;
    }

    todoApi.create(todo)
        .then((newTodo) => {
            renderTodo(newTodo)
            clearFormData(formElements)
        })
        .catch(e => showError(e.message))
  
}

function onTodoListClick(e) {
    const todoEl = getTodoItem(e.target);
    const id = Number(todoEl.dataset.id);
    const todo = todoList.find((todoItem) => todoItem.id === id)


    if(todoEl) {
        if (isDeleteBtn(e.target)) {
         todoApi.delete(id)
            .then(() => removeTodoEL(todoEl))
            .catch(e => showError(e.message))
        } else {      
            const newTodo = { ...todo, done: !todo.done};         

            todoApi.update(id, newTodo)
                .then(() => {
                    replaceTodoEl(todoEl, newTodo)
                    todoList = todoList.map((todoItem) => todoItem.id === id ? newTodo : todoItem)
                })
                .catch(e => showError(e.message))

        }
    }
}
  
function isTodoValid (todo) {
  return  !isEmpty(todo.title);
}

function renderTodoList(list) {
    const html = list.map(generateTemplate).join('');

    ul.innerHTML = html;
}

function renderTodo (todo) {
    const html = generateTemplate(todo);

    ul.insertAdjacentHTML('beforeend', html)
}

function generateTemplate(todo) {
    const done = todo.done ? `${DONE_CLASS}` : '';

    return `
        <li 
            class='todoItem ${done}' 
            data-id='${todo.id}'>
            <span class='todo__message'>${todo.title}</span>
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

function removeTodoEL(el) {
    el.remove()
}


function replaceTodoEl(oldTodoEl, todo) {
    const newTodoHTML = generateTemplate(todo)

    oldTodoEl.outerHTML = newTodoHTML
}
