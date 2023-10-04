import style from './WaiterItem.module.css'
import { 
    actionSetEditItem,
    actionRemoveItem,
 } from "./store/actions";
import { useDispatch } from 'react-redux'
import {  useLang } from '../../hooks/languageContext'

export function WaiterItem ({ waiter }) {
    const lang = useLang()
    const dispatch = useDispatch()

    const onEditBtnClick = () => {
        dispatch(actionSetEditItem(waiter))
    }
    
    const onDeleteBtnClick = () => {
        dispatch(actionRemoveItem(waiter.id))
    }

    return (
        <tr>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button onClick={onEditBtnClick} className={style.button}>{lang === 'en' ? 'Edit' : 'Змінити'}</button>
                <button onClick={onDeleteBtnClick} className={style.button}>{lang === 'en' ? 'Delete' : 'Видалити'}</button>
            </td>
         </tr>
    )
}

