import { Table, TableProps } from 'antd'
import dayjs from 'dayjs'
import { Project, User } from 'screens/project-list'
interface ListProps extends TableProps<Project> {
    users: User[]
}
export const List = ({ users, ...props }: ListProps) => {
    return (
        <Table
            rowKey={(record) => record.id}
            pagination={false}
            showSorterTooltip={false}
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
            {...props}></Table>
    )
}
