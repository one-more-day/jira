import React, { ReactNode, useState } from 'react'
import * as auth from 'auth-provider'
import { User } from 'screens/project-list'
import { http } from 'utils/http'
import { useMount } from 'utils'
import { useAsync } from 'utils/useAsync'
import { Loading } from 'components/loading'
import { message } from 'antd'
import { bootstrapThunk, loginThunk, logoutThunk, registerThunk, selectUser } from 'store/auth.slice'
import { useAppDispatch, useAppSelector } from 'store'

export interface AuthForm {
    username: string
    password: string
}

export const bootstrapUser = async () => {
    let user = null
    const token = auth.getToken()
    if (token) {
        const data = await http('me', { token })
        user = data.user
    }
    return user
}
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { run, data: user, isLoading, isIdle, isError, error } = useAsync()
    const dispatch = useAppDispatch()
    useMount(() => {
        run(dispatch(bootstrapThunk()))
    })
    if (isIdle || isLoading) {
        return <Loading />
    }
    if (isError) {
        message.error(error?.message)
    }
    return <>{children}</>
}
export const useAuth = () => {
    const dispatch = useAppDispatch()

    const login = (form: AuthForm) => dispatch(loginThunk(form))
    const register = (form: AuthForm) => dispatch(registerThunk(form))
    const logout = () => dispatch(logoutThunk())

    const user = useAppSelector(selectUser)
    return {
        login,
        register,
        logout,
        user,
    }
}
