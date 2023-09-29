import React from 'react'
import { WaiterApi } from '../api/server'
import { useDispatch, useSelector } from 'react-redux'
import { 
    actionSetList,
    actionSetEditItem,
 } from '../store/actions';


export function useWaiter() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.waiter.list);
    const waiter = useSelector((state) => state.waiter.waiter);

    React.useEffect(() => {
        WaiterApi.getList().then((newList) => dispatch(actionSetList(newList)))
    }, [dispatch])

    const onWaiterSubmit = (formWaiter) => {
        if (formWaiter.id) {
            WaiterApi.update(formWaiter.id, formWaiter).then((newWaiter) => {
                const newList = list.map((waiter) => waiter.id === formWaiter.id ? newWaiter : waiter)

                dispatch(actionSetList(newList))
            })
        } else {
            WaiterApi.create(formWaiter).then((newWaiter) => dispatch(actionSetList([...list, newWaiter])))
        }
    }

        
    const onWaiterEdit = (editWaiter) => {
        dispatch(actionSetEditItem(editWaiter))
    }

    const onWaiterDelete = (id) => {
        const newList = list.filter((waiter) => waiter.id !== id)

        WaiterApi.delete(id).then(() => dispatch(actionSetList(newList)))
    }

    return {
        waiter,
        list,
        onWaiterSubmit,
        onWaiterEdit,
        onWaiterDelete,
    }
}

