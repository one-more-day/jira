import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { projectListSlice } from 'screens/project-list/project-lise.slice'
import { authSlice } from './auth.slice'

export const rootReducer = {
    projectList: projectListSlice.reducer,
    auth: authSlice.reducer,
}

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
