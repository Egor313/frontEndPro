const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const WAITER_ITEM_CLASS = 'waiterItem';

export class ListView {
  constructor (options) {
    this.options = options
    this.container = this.init()
    this.waitersContainer = this.container.querySelector('#waitersContainer')

    this.bindEvents()
  }

  init() {
    const div = document.createElement('div')

    div.innerHTML = `
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
    
        <tbody id="waitersContainer"></tbody>
      </table>
    `

    return div.children[0];
  }

  bindEvents() {
    this.waitersContainer.addEventListener('click', this.onWaitersContainerClick.bind(this))
  }

  onWaitersContainerClick (e) {
    const target = e.target
    const waiterEl = this.findWaiterEl(target)
    const id = Number(waiterEl?.dataset?.id)

    if (id) {
      if (this.isEditButtonClicked(target)) {
        this.options.onEdit(id)
      } else if (this.isDeleteButtonClicked(target)) {
        this.options.onDelete(id)
      }
    }
  }

  appendTo(rootEl) {
    rootEl.append(this.container)
  }

  isEditButtonClicked (el) {
    return el.closest(`.${EDIT_BTN_CLASS}`)
  }

  isDeleteButtonClicked (el) {
    return el.closest(`.${DELETE_BTN_CLASS}`)
  }

  findWaiterEl (el) {
    return el.closest(`.${WAITER_ITEM_CLASS}`)
  }

  renderList (waiters) {

    this.waitersContainer.innerHTML = waiters.map(this.generateWaiterHtml).join('')
  }

  renderWaiter (waiter) {
    this.waitersContainer.insertAdjacentHTML('beforeend', this.generateWaiterHtml(waiter))
  }

  generateWaiterHtml (waiter) {
    return `
    <tr
      class="${WAITER_ITEM_CLASS}"
      data-id="${waiter.id}"
    >
      <td>${waiter.firstName}</td>
      <td>${waiter.phone}</td>
      <td>
          <button class="${EDIT_BTN_CLASS}">[Edit]</button>
          <button class="${DELETE_BTN_CLASS}">[Delete]</button>
      </td>
    </tr>
  `
  }

replaceWaiterEl(id, waiter) {
    const oldWaiterEl = this.findWaiterElById(id);

    oldWaiterEl.outerHTML = this.generateWaiterHtml(waiter);
}

findWaiterElById(id) {
    return this.waitersContainer.querySelector(`[data-id='${id}']`)
}

deleteWaiterById (id) {
    const waiterEl = this.findWaiterElById(id)

    if (waiterEl) {
        waiterEl.remove()
    } else {
      throw new Error('Waiter element not found')
    }
  }
}