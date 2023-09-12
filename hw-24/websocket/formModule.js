import { 
    isEmpty, 
    showError,
  } from '../../lib-module/index.js'

  const container = document.querySelector('.chatContainer')
  const form = document.querySelector('#chatForm');


  export function initForm({ onSubmit }) {

    form.addEventListener('submit', onFormSubmit);

    function onFormSubmit(event) {
        event.preventDefault();

        const username = form.username.value;
        const message = form.message.value;

        if (!isDataValid(username, message)) {
            showError('Invalid data');
            return;
        }

        const data = JSON.stringify({ username, message });
        onSubmit(data);
        clearFormInputs();
    }


    function isDataValid(username, message) {
        return !isEmpty(username) && !isEmpty(message);
    }

    function clearFormInputs() {
        form.username.value = '';
        form.message.value = '';
    }

}


export function renderData(data) {
    container.insertAdjacentHTML('beforeend', generateDataHtml(data))
}

export function generateDataHtml(data) {
    return `
    <p>${data.username}: ${data.message}</p>
    `
}

