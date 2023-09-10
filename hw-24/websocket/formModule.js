import { 
    isEmpty, 
    showError,
  } from '../../lib-module/index.js'

export function initForm(ws, form) {
    form.addEventListener('submit', onFormSubmit)

    function onFormSubmit(event) {
        event.preventDefault();

        const username = this.username.value;
        const message = this.message.value;

        if (!isDataValid(username, message)) {
            showError('Invalid data');
            return;
        }

        const data = JSON.stringify({username, message});
        ws.send(data)
        clearFormInputs()
    }

    function isDataValid(username, message) {
        return !isEmpty(username) && !isEmpty(message);
    }
    
    function clearFormInputs() {
        form.username.value = '';
        form.message.value = '';
    }
    
}