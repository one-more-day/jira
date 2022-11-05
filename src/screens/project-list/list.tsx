import { User } from './search-panel'
interface Project {
    id: string
    name: string
    personId: string
    pin: string
    origanization: string
}
interface ListProps {
    list: Project[]
    users: User[]
}
export const List = ({ users, list }:ListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list.map((pro) => (
                    <tr>
                        <td>{pro.name}</td>
                        <td>{users.find((user) => user.id === pro.personId)?.name || '未知'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
