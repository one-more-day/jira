import { List } from './list'
import { SearchPanel } from './search-panel'
import { useState } from 'react'
import { useDebounce, useDocumentTitle } from 'utils'
import styled from '@emotion/styled'
import { Tag } from 'antd'
import { useProject, useUser } from './service'
import { useUrlQueryParam } from 'utils/url'
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
    useDocumentTitle('Home', false)
    const [keys] = useState<('name' | 'personId')[]>(['name', 'personId'])
    const [param,setSearchParam] = useUrlQueryParam(keys)
    const debounceParam = useDebounce(param, 200)
    const { isLoading, error, data: list } = useProject(debounceParam)
    const { data: users } = useUser()

    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users || []} param={param} setParam={setSearchParam} />
            {error ? <Tag color="error">{error.message}</Tag> : null}
            <List loading={isLoading} users={users || []} dataSource={list || []} />
        </Container>
    )
}
ProjectListScreen.whyDidYouRender = true
const Container = styled.div`
    padding: 3.2rem;
`
