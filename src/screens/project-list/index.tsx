import { List } from './list'
import { SearchPanel } from './search-panel'
import { useState, useEffect } from 'react'
import qs from 'qs'
import { cleanObject, useDebounce, useMount } from 'utils'
import { useHttp } from 'utils/http'
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const debounceParam = useDebounce(param, 200)
    const client = useHttp()
    useEffect(() => {
        client('projects', { data: cleanObject(debounceParam) }).then(setList)
    }, [debounceParam])
    useMount(() => {
        client('users').then(setUsers)
    })
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}
