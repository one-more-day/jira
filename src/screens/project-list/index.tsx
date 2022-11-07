import { List } from './list'
import { SearchPanel } from './search-panel'
import { useState } from 'react'
import { useDebounce } from 'utils'
import styled from '@emotion/styled'
import { Tag } from 'antd'
import { useProject, useUser } from './service'
export interface User {
    token: string
    id: string
    name: string
    email: string
    title: string
    origanization: string
}
export interface Project {
    id: string
    name: string
    personId: string
    pin: string
    origanization: string
    created: string
}
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })
    const debounceParam = useDebounce(param, 200)
    const { isLoading, error, data: list } = useProject(debounceParam)
    const { data: users } = useUser()
    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users || []} param={param} setParam={setParam} />
            {error ? <Tag color="error">{error.message}</Tag> : null}
            <List loading={isLoading} users={users || []} dataSource={list || []} />
        </Container>
    )
}
const Container = styled.div`
    padding: 3.2rem;
`
