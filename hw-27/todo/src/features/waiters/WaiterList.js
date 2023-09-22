import { WaiterItem } from './WaiterItem'

export function WaiterList ({ waiters }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {waiters.map(waiter => (<WaiterItem key={waiter.id} waiter={waiter} />))}
            </tbody>
        </table>
    )
}