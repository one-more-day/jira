import { Table } from 'antd'
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
export const List = ({ users, list }: ListProps) => {
    return (
        <Table
            pagination={false}
            columns={[
                { title: '名称', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
                {
                    title: '负责人',
                    render(value, pro) {
                        return users.find((user) => user.id === pro.personId)?.name || '未知'
                    },
                },
            ]}
            dataSource={list}></Table>
    )
}
