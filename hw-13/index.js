'use strict'

const DELETE_BTN_CLASS = 'deleteBtn';
const CONTACT_ITEM_CLASS = 'contactItem';
const CONTACT_FORM = 'contactForm';
const CONTACT_LIST = 'contactList';

const form = document.querySelector(`#${CONTACT_FORM}`);
const contactList = document.querySelector(`#${CONTACT_LIST}`);


form.addEventListener('submit', onFormSubmit);
contactList.addEventListener('click', onContactListClick);

function onFormSubmit(e) {
    e.preventDefault();

    const formElements = form.elements;
    const contact = getFormData(formElements);
  
    if(!isContactValid(contact)) {
      showError('Будь ласка, заповніть всі поля коректно!');
      return;
    }

    renderContact(contact);
    clearFormData(formElements);

 
  }
    
function onContactListClick(e) {
    const contactEl = getContactItem(e.target)
  
    if (contactEl && e.target.classList.contains(DELETE_BTN_CLASS)) {
        removeContact(contactEl)
    }
  }

function removeContact(el) {
    el.remove()
}


function isContactValid (contact) {
    return !isEmpty(contact.name)
        && !isEmpty(contact.surname)
        && !isEmpty(contact.phone)
        && isValidNumber(Number(contact.phone))
}
  

function renderContact (contact) {
    const newRowHTML = generateTemplate(contact);

    contactList.insertAdjacentHTML('beforeend', newRowHTML)
}

function getContactItem(el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}`);
  }

