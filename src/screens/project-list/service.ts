import { useEffect } from 'react'
import { Project, User } from 'screens/project-list'
import { cleanObject, useMount } from 'utils'
import { useHttp } from 'utils/http'
import { useAsync } from 'utils/useAsync'

export const useProject = (param: Partial<Project>) => {
    const client = useHttp()
    const { run, ...result } = useAsync<Project[]>()
    useEffect(() => {
        run(client('projects', { data: cleanObject(param) }))
    }, [param])
    return result
}

export const useUser = () => {
    const client = useHttp()
    const { run, ...result } = useAsync<User[]>()
    useMount(() => {
        run(client('users'))
    })
    return result
}
