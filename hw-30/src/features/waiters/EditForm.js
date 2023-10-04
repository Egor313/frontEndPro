import React from 'react'
import style from './EditForm.module.css'
import { showError, isEmpty, isValidNumber } from '../../utils/index.js'
import { useSelector, useDispatch } from 'react-redux'; 
import { actionSaveItem } from "./store/actions";


export function EditForm () {
  const dispatch = useDispatch();
  const editingWaiter = useSelector((state) => state.waiter.editingWaiter);
  const [firstName, setFirstName] = React.useState(editingWaiter.firstName) 
  const [phone, setPhone] = React.useState(editingWaiter.phone) 

  React.useEffect(() => {
    if (editingWaiter) {
      setFirstName(editingWaiter.firstName)
      setPhone(editingWaiter.phone)
    }
  }, [editingWaiter])

  const onSubmit = (event) => {
    event.preventDefault()

    const formWaiter = {
      ...editingWaiter,
      firstName,
      phone,
    }

    if (!isDataValid(firstName, phone)) {
      showError('Invalid form data');
      return;
    }

    dispatch(actionSaveItem(formWaiter))
  }

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value) 
  }

  const onPhoneChange = (event) => {
    setPhone(event.target.value) 
  }

  const isDataValid = (firstName, phone) => {
    return !isEmpty(firstName)
        && !isEmpty(phone)
        && isValidNumber(Number(phone))
  }

  return (
    <form onSubmit={onSubmit}>
      
      <div>
        <label htmlFor="firstName" className={style.label}>First Name:</label>
        <input value={firstName} onChange={onFirstNameChange} type="text" id="firstName" className={style.formInput}/>
      </div>

      <div>
        <label htmlFor="phone" className={style.label}>Phone:</label>
        <input value={phone} onChange={onPhoneChange} type="text" id="phone" className={style.formInput}/>
      </div>

      <button type="submit" className={style.submitBtn}>Save</button>
    </form>
  )
}

