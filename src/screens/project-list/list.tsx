import { Table } from 'antd'
import dayjs from 'dayjs'
import { User } from './search-panel'
interface Project {
    id: string
    name: string
    personId: string
    pin: string
    origanization: string
    created: string
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
                { title: '部门', dataIndex: 'origanization' },
                {
                    title: '负责人',
                    render(value, pro) {
                        return users.find((user) => user.id === pro.personId)?.name || '未知'
                    },
                },
                {
                    title: '创建时间',
                    render(value, pro) {
                        return <span>{pro.created ? dayjs(pro.created).format('YYYY-MM-DD') : '无'}</span>
                    },
                },
            ]}
            dataSource={list}></Table>
    )
}
