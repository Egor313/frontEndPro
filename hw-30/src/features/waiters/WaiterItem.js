import style from './WaiterItem.module.css'
import { 
    actionSetEditItem,
    actionRemoveItem,
 } from "./store/actions";
import { useDispatch } from 'react-redux'


export function WaiterItem ({ waiter }) {
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
                <button onClick={onEditBtnClick} className={style.button}>Edit</button>
                <button onClick={onDeleteBtnClick} className={style.button}>Delete</button>
            </td>
        </tr>
    )
}

