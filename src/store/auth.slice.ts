import { createSlice } from '@reduxjs/toolkit'
import { User } from 'screens/project-list'
import * as auth from 'auth-provider'
import { AuthForm, bootstrapUser } from 'context/auth-context'
import { AppDispatch, RootState } from 'store'
interface State {
    user: User | null
}
const initialState: State = {
    user: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
    },
})
export const { setUser } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

//thunk
export const loginThunk = (form: AuthForm) => (dispatch: AppDispatch) =>
    auth.login(form).then((user) => dispatch(setUser(user)))
export const registerThunk = (form: AuthForm) => (dispatch: AppDispatch) =>
    auth.register(form).then((user) => dispatch(setUser(user)))
export const logoutThunk = () => (dispatch: AppDispatch) => auth.logout().then(() => dispatch(setUser(null)))
export const bootstrapThunk = () => (dispatch: AppDispatch) => bootstrapUser().then((user) => dispatch(setUser(user)))
