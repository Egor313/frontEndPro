import React from 'react'
import { WaiterItem } from './WaiterItem'
import style from './WaiterList.module.css'

export function WaiterList ({ waiters, onWaiterDelete, onWaiterEdit }) {
    return (
        <table className={style.listTable}>
            <thead>
                <tr>
                    <th className={style.th}>First Name</th>
                    <th className={style.th}>Phone</th>
                    <th className={style.th}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {waiters.map(waiter => (
                    <WaiterItem 
                      key={waiter.id} 
                      waiter={waiter} 
                      onWaiterEdit={onWaiterEdit} 
                      onWaiterDelete={onWaiterDelete} 
                    />
                ))}
            </tbody>
        </table>
    )
}