import React from 'react'
import style from '../WaiterList.module.css'
import { removeItem } from "../store/thunks";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button, Space } from 'antd'
import { useLang } from '../../../hooks/languageContext'


export function useColumns() {

  const lang = useLang()
  const dispatch = useDispatch()

  return [
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
                <Button onClick={() =>  dispatch(removeItem(record.id))} className={style.button}>{lang === 'en' ? 'Delete' : 'Видалити'}</Button>
        </Space>
      ),
    },
  ];
}