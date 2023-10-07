import React, { useEffect } from 'react'
import { WaiterItem } from './WaiterItem'
import style from './WaiterList.module.css'
import { actionSetList } from "./store/actions";
import { WaiterApi } from "./api/server";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { Filters } from './Filters';

export function WaiterList () {
    const dispatch = useDispatch()
    const waiters = useSelector((state) => state.waiter.list);
    let [searchParams] = useSearchParams()
    const filter = searchParams.get('filter')
    const filteredWaiters = filterWaiters(waiters, filter)

    useEffect(() => {
        WaiterApi.getList().then((newList) => dispatch(actionSetList(newList)))
    }, [dispatch])

    return (
        <div>
            <h1>Waiter List</h1>
            <div>
                 <Link to='/waiter/edit'><button>Add New</button></Link>
            </div>
            <table className={style.listTable}>
                <thead>
                    <tr>
                        <th className={style.th}>First Name</th>
                        <th className={style.th}>Phone</th>
                        <th className={style.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredWaiters.map(waiter => (
                        <WaiterItem 
                        key={waiter.id} 
                        waiter={waiter}
                        />
                    ))}
                </tbody>
            </table>
            <Filters />
        </div>
    )
}

function filterWaiters (waiters) {
      return waiters
  }