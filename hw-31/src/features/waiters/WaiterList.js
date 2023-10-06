import React, { useEffect } from 'react'
import { WaiterItem } from './WaiterItem'
import style from './WaiterList.module.css'
import { actionSetList } from "./store/actions";
import { WaiterApi } from "./api/server";
import { useDispatch, useSelector } from 'react-redux';

export function WaiterList () {
    const dispatch = useDispatch()
    const waiters = useSelector((state) => state.waiter.list);

    useEffect(() => {
        WaiterApi.getList().then((newList) => dispatch(actionSetList(newList)))
    }, [dispatch])

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
                    />
                ))}
            </tbody>
        </table>
    )
}