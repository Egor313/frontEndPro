import React from 'react'
import { EditForm } from "./EditForm";
import { WaiterList } from "./WaiterList";
import { WaiterApi } from '../../api/server';


export function Waiter () {
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        WaiterApi.getList().then((data) => setList(data))
    }, [])

    const onWaiterSubmit = (waiter) => {
        setList([...list, waiter])
    }

    return (
        <>
            <EditForm onWaiterSubmit={onWaiterSubmit}/>
            <WaiterList waiters={list}/>
        </>
    )
}