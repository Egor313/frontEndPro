import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { Filters } from '../Filters';
import { Page } from '../../../components/Page'
import { Alert, Button, Table } from 'antd'
import { useColumns } from "./useColumns";
import { filterWaiters } from "../utils/filterWaiters";
import { getList } from '../store/thunks';

export function WaiterList () {
    const dispatch = useDispatch()
    const waiters = useSelector((state) => state.waiter.list);
    const loading = useSelector((state) => state.waiter.listLoading);
    const error = useSelector((state) => state.waiter.listError);
    let [searchParams] = useSearchParams()
    const filter = searchParams.get('filter')
    const filteredWaiters = filterWaiters(waiters, filter)
    const columns = useColumns();
     
  

    useEffect(() => {
      dispatch(getList())
    }, [dispatch])

    return (
        <Page title='Waiters List'>
            <div>
                 <Link to='/waiter/edit'><Button>Add New</Button></Link>
            </div>

            <Table loading={loading} columns={columns} dataSource={filteredWaiters} rowKey='id'/>
            
            {error && <Alert message={error} type='error' />}
            
            <Filters />
        </Page>
    )
}


