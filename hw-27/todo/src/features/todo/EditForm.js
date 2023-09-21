import React from 'react'

export function EditForm ({ onTodoSubmit }) {
  const [title, setTitle] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    onTodoSubmit({
      id: Date.now().toLocaleString(),
      title,
      done: false,
    })

    setTitle('')
  }

  const onTitleChange = (event) => {
    setTitle(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input value={title} onChange={onTitleChange} type="text" id="title" />

      <button type="submit">Save</button>
    </form>
  )
}