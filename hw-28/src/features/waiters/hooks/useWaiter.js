import React from 'react'
import { WaiterApi } from '../../../api/server'


export function useWaiter() {
    const [waiter, setWaiter] = React.useState(undefined);
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        WaiterApi.getList().then((data) => setList(data))
    }, [])

    const onWaiterSubmit = (formWaiter) => {
        if (formWaiter.id) {
            WaiterApi.update(formWaiter.id, formWaiter).then((newWaiter) => {
                const newList = list.map((waiter) => waiter.id === formWaiter.id ? newWaiter : waiter)

                setList(newList)
            })
        } else {
            WaiterApi.create(formWaiter).then((newWaiter) => setList([...list, newWaiter]))
        }
    }

        
    const onWaiterEdit = (editWaiter) => {
        setWaiter(editWaiter)
    }

    const onWaiterDelete = (id) => {
        const newList = list.filter((waiter) => waiter.id !== id)

        WaiterApi.delete(id).then(() => setList(newList))
    }

    return {
        waiter,
        list,
        onWaiterSubmit,
        onWaiterEdit,
        onWaiterDelete,
    }
}

