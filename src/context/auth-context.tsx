import React, { ReactNode, useState } from 'react'
import * as auth from 'auth-provider'
import { User } from 'screens/project-list'
import { http } from 'utils/http'
import { useMount } from 'utils'
import { useAsync } from 'utils/useAsync'
import { Loading } from 'components/loading'
import { message } from 'antd'
interface AuthContextType {
    user: User | null
    register: (from: AuthForm) => Promise<void>
    login: (from: AuthForm) => Promise<void>
    logout: () => Promise<void>
}
interface AuthForm {
    username: string
    password: string
}
const AuthContext = React.createContext<AuthContextType | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

const bootstrapUser = async () => {
    let user = null
    const token = auth.getToken()
    if (token) {
        const data = await http('me', { token })
        user = data.user
    }
    return user
}
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { run, data: user, isLoading, isIdle, setData: setUser, isError, error } = useAsync<User | null>()
    const login = (form: AuthForm) => auth.login(form).then(setUser)
    const register = (form: AuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))
    useMount(() => {
        run(bootstrapUser())
    })
    console.log(error)
    if (isIdle || isLoading) {
        return <Loading />
    }
    if (isError) {
        message.error(error?.message)
    }
    return <AuthContext.Provider children={children} value={{ user, login, register, logout }}></AuthContext.Provider>
}
export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth必须在AuthProvider中使用')
    }
    return context
}
