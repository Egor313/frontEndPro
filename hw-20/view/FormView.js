import { 
  clearFormData,
  fillFormData, 
  getFormData, 
  isEmpty, 
  showError,
} from '../../lib-module/index.js'


export class FormView {
constructor (options) {
  this.options = options
  this.form = this.init()

  this.bindEvents()
}

init() {
  const div = document.createElement('div')

  div.innerHTML = `
    <form id="waitersForm" class="form">
      <input type="hidden"  name="id"             id="id"           class="formInput">
      <input type="text"    name="firstName"      id="firstName"    class="formInput" />
      <input type="text"    name="phone"          id="phone"        class="formInput" />
      <button>Save</button>
    </form>
  `

  return div.children[0];
}

bindEvents() {
  this.form.addEventListener('submit', this.onFormSubmit.bind(this))
}

appendTo(rootEl) {
  rootEl.append(this.form)
}

onFormSubmit (e) {
  e.preventDefault()

  const waiter = getFormData(this.form.elements)

  if (!this.isDataValid(waiter)) {
    showError('Invalid form data')
    return;
  }

  this.options.onSubmit(waiter)
}

isDataValid (waiter) {
  return !isEmpty(waiter.firstName)
    && !isEmpty(waiter.phone)
}

fillForm(waiter) {
  fillFormData(this.form.elements, waiter)
}

clearForm() {
  clearFormData(this.form.elements)
}
}