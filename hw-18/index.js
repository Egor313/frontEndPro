'use strict'
import { Api } from '../lib-api/Api.js';
import { contactsUrl } from '../lib-api/url.js';
import {
    getFormData,
    clearFormData,
    isEmpty,
    isValidNumber,
    showError,
} from '../lib-module/index.js';


const CONTACT_ITEM_CLASS = 'contactItem';
const CONTACT_FORM = 'contactForm';
const CONTACT_LIST = 'contactList';
const DELETE_BTN_CLASS = 'deleteBtn';
const EDIT_BTN_CLASS = 'editBtn';

const contactsApi = new Api(contactsUrl);
const form = document.querySelector(`#${CONTACT_FORM}`);
const ul = document.querySelector(`#${CONTACT_LIST}`);


form.addEventListener('submit', onFormSubmit);
ul.addEventListener('click', onContactListClick);
let contactsList = [];


init();

function init() {
    contactsApi.getList()
      .then((list) => {
        contactsList = list;
        renderContactList(list)
      })
      .catch(e => showError(e.message))
}

function onFormSubmit(e) {
    e.preventDefault();

    const formElements = form.elements;
    const contact = getFormData(formElements);
    const editedContactId = form.getAttribute('data-edit-id');
  
    if (!isEmpty(editedContactId)) {
       contactsApi.update(editedContactId, contact)
            .then(() => {
                const editedContactEl = getContactItemById(editedContactId);
                replaceContactEl(editedContactEl, contact);
                clearFormData(formElements);
                form.removeAttribute('data-edit-id');
            })
            .catch(e => showError(e.message))
    } else {
        if(!isContactValid(contact)) {
            showError('Будь ласка, заповніть всі поля коректно!');
            return;
          }

          contactsApi.create(contact)
          .then((newContact) => {
            renderContact(newContact);
            clearFormData(formElements);
          })
          .catch(e => showError(e.message))
    
      }
    }


function onContactListClick(e) {
    const el = e.target;
    const contactEl = getContactItem(el);
    const id = Number(contactEl.dataset.id);
    const contact = contactsList.find((contactItem) => contactItem.id === id)

    if (contactEl) {
        if (isDeleteBtn(el)) {
            contactsApi.delete(id)
              .then(() => removeContactEL(contactEl))
              .catch(e => showError(e.message))
        } else {
            if (isEditBtn(el)) {
                form.setAttribute('data-edit-id', id);
                formEdit(contact);
            }
        }
    }

  }


function isContactValid (contact) {
    return !isEmpty(contact.firstName)
        && !isEmpty(contact.lastName)
        && !isEmpty(contact.phone)
        && isValidNumber(Number(contact.phone))
}
  
function renderContactList(list) {
    ul.innerHTML = list.map(generateTemplate).join('');
}

function renderContact (contact) {
    const newRowHTML = generateTemplate(contact);

    ul.insertAdjacentHTML('beforeend', newRowHTML)
}

function generateTemplate(contact) {
    return `
        <tr 
          class='${CONTACT_ITEM_CLASS}'
          data-id='${contact.id}'
        >
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phone}</td>
            <td>
            <button class='${EDIT_BTN_CLASS}' type='button'>Edit</button>
            <button class='${DELETE_BTN_CLASS}' type='button'>Delete</button>
            </td>
        </tr>
    `;
  }

function getContactItem(el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}`);
  }

function getContactItemById(id) {
    return ul.querySelector(`.${CONTACT_ITEM_CLASS}[data-id='${id}']`)
}  

function isDeleteBtn(el) {
    return el.closest(`.${DELETE_BTN_CLASS}`)
}

function isEditBtn(el) {
    return el.closest(`.${EDIT_BTN_CLASS}`)
}

function formEdit(contact) {
    form.firstName.value = contact.firstName;
    form.lastName.value = contact.lastName;
    form.phone.value = contact.phone;
}
  
function removeContactEL(el) {
    el.remove()
}

function replaceContactEl(oldContactEl, contact) {
    const newContactHTML = generateTemplate(contact);

    oldContactEl.outerHTML = newContactHTML
}