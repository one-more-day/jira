import { Table, TableProps } from 'antd'
import { Pin } from 'components/pin'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { Project, User } from 'screens/project-list'
import { useEditProjct } from './service'
interface ListProps extends TableProps<Project> {
    retry: () => void
    users: User[]
}
export const List = ({ retry, users, ...props }: ListProps) => {
    const { mutate } = useEditProjct()
    return (
        <Table
            rowKey={(record) => record.id}
            pagination={false}
            showSorterTooltip={false}
            columns={[
                {
                    title: <Pin checked={true} disabled={true} />,
                    render(val, pro) {
                        return (
                            <Pin
                                checked={pro.pin}
                                onCheckedChange={(pin) => {
                                    mutate({ id: pro.id, pin }).then(() => {
                                        retry()
                                    })
                                }}
                            />
                        )
                    },
                },
                {
                    title: '名称',
                    dataIndex: 'name',
                    sorter: (a, b) => a.name.localeCompare(b.name),
                    render: (_, project) => {
                        return <Link to={'projects/' + project.id}>{project.name}</Link>
                    },
                },
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
