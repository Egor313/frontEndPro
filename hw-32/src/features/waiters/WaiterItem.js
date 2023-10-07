import style from './WaiterItem.module.css'
import { actionRemoveItem } from "./store/actions";
import { useDispatch } from 'react-redux'
import { useLang } from '../../hooks/languageContext'
import { Link } from 'react-router-dom'

export function WaiterItem ({ waiter }) {

    const lang = useLang()
    const dispatch = useDispatch()
    
    const onDeleteBtnClick = () => {
        dispatch(actionRemoveItem(waiter.id))
    }

    return (
        <tr>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <Link to={`/waiter/edit/${waiter.id}`}><button className={style.button}>{lang === 'en' ? 'Edit' : 'Змінити'}</button></Link>
                <button onClick={onDeleteBtnClick} className={style.button}>{lang === 'en' ? 'Delete' : 'Видалити'}</button>
            </td>
         </tr>
    )
}

