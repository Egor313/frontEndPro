export function TodoItem({ todo }) {
    return (
        <tr>
            <td>{todo.done ? 'Yes' : 'No'}</td>
            <td>{todo.title}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}