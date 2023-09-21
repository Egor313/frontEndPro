import React from 'react'

export function EditForm ({ onWaiterSubmit }) {
  const [firstName, setFirstName] = React.useState('') 
  const [phone, setPhone] = React.useState('') 

  const onSubmit = (event) => {
    event.preventDefault()

    onWaiterSubmit({
      id: Date.now().toLocaleString(),
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
      <label htmlFor="firstName">First Name</label>
      <input value={firstName} onChange={onFirstNameChange} type="text" id="firstName" />

      <label htmlFor="phone">Phone</label>
      <input value={phone} onChange={onPhoneChange} type="text" id="phone" />

      <button type="submit">Save</button>
    </form>
  )
}

