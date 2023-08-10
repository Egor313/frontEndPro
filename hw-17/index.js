'use strict'

const FORM_SELECTOR = '#todoForm';
const TODO_LIST = '#todoList';
const CHECKBOX_CLASS = 'checkbox';
const DELETE_BTN_CLASS = 'delete_btn';
const TODO_ITEM_CLASS = 'todo__item';
const URL = 'https://mock-api-5678.nw.r.appspot.com/todos/';

const form = document.querySelector(FORM_SELECTOR);
const todoList = document.querySelector(TODO_LIST);

  
form.addEventListener('submit', onFormSubmit);
todoList.addEventListener('click', onTodoListClick);
  

getTodoList()
    .then((list) => {
        renderTodoList(list)
    })
    .catch(e => showError(e.message))


function onFormSubmit(e) {
    e.preventDefault();

    const formElements = form.elements;
    const todo = getFormData(formElements);

    if (!isTodoValid(todo)) {
        showError('Будь ласка, заповніть всі поля коректно!');
        return;
    }

    createTodo(todo)
        .then((newTodo) => {
            renderTodo(newTodo)
            clearFormData(formElements)
        })
        .catch(e => showError(e.message))
  
}

function onTodoListClick(e) {
    const todoEl = getTodoItem(e.target);
    const id = todoEl.dataset.id;


    if(todoEl) {
        if (isDeleteBtn(e.target)) {
          deleteTodo(id)
            .then(() => removeTodoEL(todoEl))
            .catch(e => showError(e.message))
        } 
        
        if (isChecked(e.target)) {      
            const currentIsChecked = isChecked(todoEl);
            const updatedTodoData = { 
                isChecked: !currentIsChecked,
                title,
            };
            

            updateTodo(id, updatedTodoData)
                .then((updatedTodoEl) => {
                    updateTodoOnPage(updatedTodoEl)
                    toggleCheckBox(todoEl)
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

    todoList.innerHTML = html;
}

function renderTodo (todo) {
    const html = generateTemplate(todo);

    todoList.insertAdjacentHTML('beforeend', html)
}

function generateTemplate(todo) {
    return `
        <li class='${TODO_ITEM_CLASS}' data-id='${todo.id}'>
            <input type='checkbox' class='${CHECKBOX_CLASS}'>
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

function isChecked(el) {
    return el.closest(`.${CHECKBOX_CLASS}`);
}

function toggleCheckBox(el) {
    return el.classList.toggle(CHECKBOX_CLASS)
}


function getTodoList() {
    return fetch(URL) 
      .then((response) => {
        if (response.ok) {
            return response.json()
        }

        throw new Error(`${response.status} ${response.statusText}`);
      })
      .catch((error) => {
        throw new Error(`Can not fetch todo list: ${error.message}`);
      })
}

function createTodo(todo) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        }
    }) 
      .then((response) => {
        if (response.ok) {
            return response.json()
        }

        throw new Error(`${response.status} ${response.statusText}`);
      })
      .catch((error) => {
        throw new Error(`Can not create todo: ${error.message}`);
      })
}

function deleteTodo(id) {
    return fetch(`${URL}${id}`, {
        method: 'DELETE',
    }) 
      .then((response) => {
        if (response.ok) {
            return response.json()
        }

        throw new Error(`${response.status} ${response.statusText}`);
      })
      .catch((error) => {
        throw new Error(`Can not delete todo: ${error.message}`);
      })
}

function updateTodo(id, updatedTodoEl) {
    return fetch(`${URL}${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTodoEl),
        headers: {
            'Content-type': 'application/json',
        }
    }) 
      .then((response) => {
        if (response.ok) {
            return response.json()
        }

        throw new Error(`${response.status} ${response.statusText}`);
      })
      .catch((error) => {
        throw new Error(`Can not update todo: ${error.message}`);
      })
}

function updateTodoOnPage(updatedTodo) {
    const todoEl = todoList.querySelector(`.${TODO_ITEM_CLASS}[data-id="${updatedTodo.id}"]`);

    if (todoEl) {
        const checkbox = todoEl.querySelector(`.${CHECKBOX_CLASS}`);
        
        checkbox.checked = updatedTodo.isChecked;

        if (checkbox.classList.contains(CHECKBOX_CLASS) !== updatedTodo.isChecked) {
            toggleCheckBox(todoEl);
        }
    }
}
