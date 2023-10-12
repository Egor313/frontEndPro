import React, { useEffect } from 'react'
import style from './WaiterList.module.css'
import { actionSetList, actionRemoveItem } from "./store/actions";
import { WaiterApi } from "./api/server";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { Filters } from './Filters';
import { Page } from '../../components/Page'
import { Button, Space, Table } from 'antd'
import { useLang } from '../../hooks/languageContext'

export function WaiterList () {
    const dispatch = useDispatch()
    const waiters = useSelector((state) => state.waiter.list);
    let [searchParams] = useSearchParams()
    const filter = searchParams.get('filter')
    const filteredWaiters = filterWaiters(waiters, filter)
    const lang = useLang()

     
  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
                <Link to={`/waiter/edit/${record.id}`}><Button>{lang === 'en' ? 'Edit' : 'Змінити'}</Button></Link>
                <Button onClick={() =>  dispatch(actionRemoveItem(record.id))} className={style.button}>{lang === 'en' ? 'Delete' : 'Видалити'}</Button>
        </Space>
      ),
    },
  ];

    useEffect(() => {
        WaiterApi.getList().then((newList) => dispatch(actionSetList(newList)))
    }, [dispatch])

    return (
        <Page title='Waiters List'>
            <div>
                 <Link to='/waiter/edit'><Button>Add New</Button></Link>
            </div>

            <Table columns={columns} dataSource={filteredWaiters} rowKey='id'/>
            <Filters />
        </Page>
    )
}

function filterWaiters (waiters) {
      return waiters
  }