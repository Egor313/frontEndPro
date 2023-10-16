import { WaiterApi } from "../api/server";
import { action } from "./reducer";

export const getList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading())
        WaiterApi
            .getList()
            .then((newList) => dispatch(action.getListSuccess(newList)))
            .catch((error) => dispatch(action.getListError(error.message)))
    }
}

export const saveItem = (waiter) => {
    return (dispatch) => {
        if (waiter.id) {
            WaiterApi.update(waiter.id, waiter).then((newWaiter) =>  dispatch(action.updateItem(newWaiter)))
        } else {
            WaiterApi.create(waiter).then((newWaiter) => dispatch(action.createItem(newWaiter)))
        }
    }
}
export const getOneItem = (id) => {
    return (dispatch) => {
        WaiterApi.getOne(id).then((waiter) =>  dispatch(action.setEditItem(waiter)))
    }
}

export const removeItem = (id) => { 
    return (dispatch) => {
        WaiterApi.delete(id).then(() => dispatch(action.removeItem(id)))
    }
 };