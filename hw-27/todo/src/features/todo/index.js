import React from 'react'
import { EditForm } from "./EditForm";
import { TodoList } from "./TodoList";
import { TodoApi } from '../../api/server';



export function Todo () {
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        TodoApi.getList().then((data) => setList(data))
    }, [])

    const onTodoSubmit = (todo) => {
        setList([...list, todo])
    }

    return (
        <>
            <EditForm onTodoSubmit={onTodoSubmit}/>
            <TodoList todos={list}/>
        </>
    )
}