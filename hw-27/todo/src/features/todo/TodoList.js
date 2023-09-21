import {TodoItem} from './TodoItem'

export function TodoList ({ todos }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Done</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (<TodoItem key={todo.id} todo={todo} />))}
            </tbody>
        </table>
    )
}