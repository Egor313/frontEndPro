import React from 'react'
import style from './EditForm.module.css'

export function EditForm ({ waiter, onWaiterSubmit }) {
  const [firstName, setFirstName] = React.useState('') 
  const [phone, setPhone] = React.useState('') 

  React.useEffect(() => {
    if (waiter) {
      setFirstName(waiter.firstName)
      setPhone(waiter.phone)
    }
  }, [waiter])

  const onSubmit = (event) => {
    event.preventDefault()

    onWaiterSubmit({
      ...waiter,
      firstName,
      phone,
    })

    setFirstName('')
    setPhone('') 
  }

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value) 
  }

  const onPhoneChange = (event) => {
    setPhone(event.target.value) 
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

