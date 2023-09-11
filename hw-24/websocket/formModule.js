import { 
    isEmpty, 
    showError,
  } from '../../lib-module/index.js'


  export function initForm(ws) {
    const form = document.querySelector('#chatForm');
    const container = document.querySelector('.chatContainer')

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
        ws.send(data);
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

