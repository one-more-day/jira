import { Form, Input, Select } from 'antd'
import { UserSelect } from 'components/user-select'
import { useEffect, useState } from 'react'
import { Project, User } from 'screens/project-list'

interface SearchPanelProps {
    users: User[]
    param: Partial<Pick<Project, 'name' | 'personId'>>
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
                <UserSelect
                    defaultOptionName="负责人"
                    value={param.personId}
                    onChange={(value) =>
                        setParam({
                            ...param,
                            personId: value,
                        })
                    }
                />
            </Form.Item>
        </Form>
    )
}
