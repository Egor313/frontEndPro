import { Api } from '../../lib-api/Api.js'
import { waitersUrl } from '../../lib-api/url.js'

export class Collection {
  #waitersList = []
  
  constructor () {
    this.api = new Api(waitersUrl)
  }

  async getList () {
    try {
      const list = await this.api.getList()
      this.setWaiters(list)
      return list
    } catch (error) {
      throw error
    }
  }

  async remove (id) {
    try {
      await this.api.delete(id)
      this.deleteWaiterInList(id)
      return id
    } catch (error) {
      throw error
    }
  }

  async create (waiter) {
    try {
      const newWaiterWithId = await this.api.create(waiter)
      this.addWaiterInList(newWaiterWithId)
      return newWaiterWithId
    } catch (error) {
       throw error
    }
  }

  async update (waiter) {
    try {
      await this.api.update(waiter.id, waiter)
      this.replaceWaiterInList(waiter.id, waiter)
      return waiter
    } catch (error) {
       throw error
    }
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