import { List } from './list'
import { SearchPanel } from './search-panel'
import { useState, useEffect } from 'react'
import qs from 'qs'
import { cleanObject, useDebounce, useMount } from 'utils'
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const debounceParam = useDebounce(param, 200)
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (res) => {
            if (res.ok) {
                setList(await res.json())
                console.log("res")
            }
        })
    }, [debounceParam])
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async (res) => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    })
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}
