import React, { useEffect } from 'react'
import { actionSetList, actionSetEditItem, actionRemoveItem } from "./store/actions";
import { WaiterApi } from "./api/server";
import {  useLang } from '../../hooks/languageContext'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Space } from "antd";

export function WaiterList () {
    const dispatch = useDispatch()
    const waiters = useSelector((state) => state.waiter.list);
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
            <Button onClick={() => dispatch(actionSetEditItem(record))} >{lang === 'en' ? 'Edit' : 'Змінити'}</Button>
            <Button onClick={() =>  dispatch(actionRemoveItem(record.id))} >{lang === 'en' ? 'Delete' : 'Видалити'}</Button>
        </Space>
      ),
    },
  ];

    useEffect(() => {
        WaiterApi.getList().then((newList) => dispatch(actionSetList(newList)))
    }, [dispatch])

    return (
        <div>

            <Table columns={columns} dataSource={waiters} rowKey='id'/>
   
        </div>
 )
}