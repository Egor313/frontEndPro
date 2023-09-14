import { FormView } from '../view/FormView.js'
import { ListView } from '../view/ListView.js'
import { Collection } from '../model/Collection.js'
import { showError } from '../../lib-module/index.js'


export class Controller {
    constructor (rootEl) {
      this.rootEl = rootEl
  
      this.collection = new Collection();
      this.formView = new FormView({
        onSubmit: async(waiter) => {
          try {
            await this.saveWaiter(waiter)
          } catch (error) {
            showError(error)
          }
        }
      });
      this.listView = new ListView({
        onEdit: (id) => {
          const waiter = this.collection.getWaiterById(id)
  
          this.formView.fillForm(waiter)
        },
        onDelete: async (id) => {
          try {
            await this.collection.remove(id)
            this.listView.deleteWaiterById(id)
          } catch (error) {
            showError(error)
          }
        },
      });
  
      this.formView.appendTo(this.rootEl)
      this.listView.appendTo(this.rootEl)
  
      this.init()
    }

    async init() {
      try {
        const list = await this.collection.getList()
        this.listView.renderList(list)
      } catch (error) {
        showError(error)
      }
    }
  
    async saveWaiter (waiter) {
      if (waiter.id) {
        try {
          await this.collection.update(waiter)
          this.listView.replaceWaiterEl(waiter.id, waiter)
          this.formView.clearForm()
        } catch (error) {
          showError(error)
        }
      } else {
        try {
          const newWaiterWithId = await this.collection.create(waiter)
          this.listView.renderWaiter(newWaiterWithId)
          this.formView.clearForm()
        } catch (error) {
          showError(error)
        }
      }
    }
  }