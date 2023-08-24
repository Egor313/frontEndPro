import { Api } from '../../lib-api/Api.js'
import { waitersUrl } from '../../lib-api/url.js'

export class Collection {
  #waitersList = []
  
  constructor () {
    this.api = new Api(waitersUrl)
  }

  getList () {
    return this.api
      .getList()
      .then((list) => {
        this.setWaiters(list)

        return list
      })
  }

  remove (id) {
    return this.api
      .delete(id)
      .then(() => {
        this.deleteWaiterInList(id)

        return id
      })
  }

  create (waiter) {
    return this.api
      .create(waiter)
      .then((newWaiterWithId) => {
        this.addWaiterInList(newWaiterWithId)

        return newWaiterWithId
      })
  }

  update (waiter) {
    return this.api
      .update(waiter.id, waiter)
      .then(() => {
        this.replaceWaiterInList(waiter.id, waiter)

        return waiter
      })
  }

  setWaiters (list) {
    this.#waitersList = list
  }

  getWaiters  () {
    return this.#waitersList
  }

  getWaiterById (id) {
    return this.#waitersList.find(waiter => waiter.id === id)
  }

  replaceWaiterInList (id, waiter) {
    this.#waitersList = this.#waitersList.map(w => w.id === Number(id) ? { ...waiter, id: Number(id) } : w)
  }

  addWaiterInList (waiter) {
    this.#waitersList.push(waiter)
  }

  deleteWaiterInList (id) {
    this.#waitersList = this.#waitersList.filter(waiter => waiter.id !== Number(id))
  }
}