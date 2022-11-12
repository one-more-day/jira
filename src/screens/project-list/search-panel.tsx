import { Form, Input, Select } from 'antd'
import { useEffect, useState } from 'react'
import { User } from 'screens/project-list'

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
        <Form style={{ marginBottom: '2rem' }} layout="inline">
            <Form.Item>
                <Input
                    placeholder="项目名"
                    type="text"
                    value={param.name}
                    onChange={(e) =>
                        setParam({
                            ...param,
                            name: e.target.value,
                        })
                    }
                />
            </Form.Item>
            <Form.Item>
                <Select
                    value={param.personId}
                    onChange={(value) =>
                        setParam({
                            ...param,
                            personId: value,
                        })
                    }>
                    <Select.Option key={'负责人'} value="">
                        负责人
                    </Select.Option>
                    {users.map((user) => (
                        <Select.Option key={user.id} value={String(user.id)}>
                            {user.name}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    )
}
