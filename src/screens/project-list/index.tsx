import { List } from './list'
import { SearchPanel } from './search-panel'
import { useMemo, useState } from 'react'
import { useDebounce, useDocumentTitle } from 'utils'
import styled from '@emotion/styled'
import { Tag } from 'antd'
import { useProject, useUser } from './service'
import { useUrlQueryParam } from 'utils/url'
export interface User {
    token: string
    id: number
    name: string
    email: string
    title: string
    origanization: string
}
export interface Project {
    id: number
    name: string
    personId: number
    pin: boolean
    origanization: string
    created: string
}
export const ProjectListScreen = () => {
    useDocumentTitle('Home', false)
    const [keys] = useState<('name' | 'personId')[]>(['name', 'personId'])
    const [param, setSearchParam] = useUrlQueryParam(keys)
    const projectParam = useMemo(() => ({ ...param, personId: Number(param.personId) || undefined }), [param])

    const debounceParam = useDebounce(projectParam, 200)
    const { retry, isLoading, error, data: list } = useProject(debounceParam)
    const { data: users } = useUser()

    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users || []} param={projectParam} setParam={setSearchParam} />
            {error ? <Tag color="error">{error.message}</Tag> : null}
            <List retry={retry} loading={isLoading} users={users || []} dataSource={list || []} />
        </Container>
    )
}
ProjectListScreen.whyDidYouRender = true
const Container = styled.div`
    padding: 3.2rem;
`
