import React from 'react'
import { EditForm } from "./EditForm";
import { WaiterList } from "./WaiterList";
import { useWaiter } from './hooks/useWaiter';



export function Waiter () {
    const {waiter, list, onWaiterSubmit, onWaiterDelete, onWaiterEdit} = useWaiter()

    return (
        <>
            <EditForm 
                waiter={waiter}
                onWaiterSubmit={onWaiterSubmit}
            />
            <WaiterList
              waiters={list}
              onWaiterEdit={onWaiterEdit}  
              onWaiterDelete={onWaiterDelete}  
            />
        </>
    )
}