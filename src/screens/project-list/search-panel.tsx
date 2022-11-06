import { Form, Input, Select } from 'antd'
import { useEffect, useState } from 'react'
export interface User {
    token: string
    id: string
    name: string
    email: string
    title: string
    origanization: string
}
interface SearchPanelProps {
    users: User[]
    param: {
        name: string
        personId: string
    }
    setParam: (param: SearchPanelProps['param']) => void
}
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
    return (
        <Form action="">
            {/* setParam(Object.assign({},param,{name:e.target.value})) */}
            <Input
                type="text"
                value={param.name}
                onChange={(e) =>
                    setParam({
                        ...param,
                        name: e.target.value,
                    })
                }
            />
            <Select
                value={param.personId}
                onChange={(value) =>
                    setParam({
                        ...param,
                        personId: value,
                    })
                }>
                <Select.Option value="">负责人</Select.Option>
                {users.map((user) => (
                    <Select.Option value={user.id}>{user.name}</Select.Option>
                ))}
            </Select>
        </Form>
    )
}
