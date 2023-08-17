'use strict'
import { Api } from '../lib-api/Api.js';
import { waitersUrl } from '../lib-api/url.js';
import {
    fillFormInputs,
    clearFormData,
    getFormDataInputs,
    isEmpty,
    isValidNumber,
    showError,
} from '../lib-module/index.js';

const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const WAITER_ITEM_CLASS = 'waiterItem';

const inputs = document.querySelectorAll('.formInput')
const waiterContainer = document.querySelector('#waitersContainer');
const form = document.querySelector('#waitersForm');
const api = new Api(waitersUrl);
let waiterList = [];


waiterContainer.addEventListener('click', onWaitersContainerClick);
form.addEventListener('submit', onFormSubmit);

init()

function init() {
    api.getList().then((list) => {
        renderList(list);
        waiterList = list;
    })
    .catch(e => showError(e.message))
}

function onWaitersContainerClick(e) {
    const target = e.target
    const waiterEl = findWaiterEl(target)
    const id = Number(waiterEl?.dataset?.id)

    if (id && isEditButtonClicked(target)) {
        const waiter = getWaiterById(id)
        fillFormInputs(inputs, waiter)
    } else if (id && isDeleteBtnClicked(target)) {
        api.delete(id)
            .then(() => removeWaiterEL(waiterEl))
            .catch(e => showError(e.message))
    }
}

function onFormSubmit(e) {
    e.preventDefault()

    const formElements = form.elements;
    const waiter = getFormDataInputs(inputs);

 
    if(!isDataValid(waiter)) {
        showError('Будь ласка, заповніть всі поля коректно!');
        return;
      }

    if (waiter.id) { 
      api.update(waiter.id, waiter)
          .then(() => {
            replaceWaiterInList(waiter.id, waiter);
            replaceWaiterEl(waiter.id, waiter);
            clearFormData(formElements);
        })
        .catch(e => showError(e.message))
    } else {
        api.create(waiter)
          .then((newWaiter) => {
            renderWaiter(newWaiter);
            clearFormData(formElements);
          })
          .catch(e => showError(e.message))
    }


}

function isDataValid (waiter) {
    return !isEmpty(waiter.firstName)
        && !isEmpty(waiter.phone)
        && isValidNumber(Number(waiter.phone))
}


function isEditButtonClicked(el) {
    return el.closest(`.${EDIT_BTN_CLASS}`)
}

function findWaiterEl(el) {
    return el.closest(`.${WAITER_ITEM_CLASS}`)
}

function renderList(waiters) {
    waiterContainer.innerHTML = waiters.map(generateWaiterHtml).join('');
}

function renderWaiter(waiter) {
    const newHTML = generateWaiterHtml(waiter);

    waiterContainer.insertAdjacentHTML('beforeend', newHTML) 
}

function generateWaiterHtml(waiter) {
    return `
    <tr 
        class='${WAITER_ITEM_CLASS}'
        data-id='${waiter.id}'
        >
            <td>${waiter.firstName}</td>
            <td>${waiter.phone}</td>
            <td>
            <button class='${EDIT_BTN_CLASS}' type='button'>Edit</button>
            <button class='${DELETE_BTN_CLASS}' type='button'>Delete</button>
            </td>
    </tr>
    `
}

function replaceWaiterEl(id, waiter) {
    const oldwaiterEl = findwaiterElById(id);

    oldwaiterEl.outerHTML = generateWaiterHtml(waiter);
}

function findwaiterElById(id) {
    return waiterContainer.querySelector(`.${WAITER_ITEM_CLASS}[data-id='${id}']`)
}

function getWaiterById(id) {
    return waiterList.find(waiter => waiter.id === id)
}

function replaceWaiterInList(id, waiter) {
    waiterList = waiterList.map(c => c.id === Number(id) ? { ...waiter, id: Number(id)} : c)
}

function removeWaiterEL(el) {
    el.remove()
}

function isDeleteBtnClicked(el) {
    return el.closest(`.${DELETE_BTN_CLASS}`)
}


