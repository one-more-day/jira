import { useRef, useState } from 'react'

export interface State<D> {
    error: Error | null
    data: D | null
    status: 'idle' | 'loading' | 'error' | 'success'
}
const defaultInitialState: State<null> = {
    status: 'idle',
    error: null,
    data: null,
}
export const useAsync = <D>(initialState?: State<D>) => {
    const [state, setState] = useState<State<D>>({
        ...defaultInitialState,
        ...initialState,
    })
    const setData = (data: D) => setState({ data, status: 'success', error: null })
    const setError = (error: Error) => setState({ data: null, status: 'error', error })
    const retryRef = useRef(() => {})
    //触发异步请求
    const run = (promise: Promise<D>, config?: { retry: () => Promise<D> }) => {
        if (!promise || !promise.then) throw new Error('请传入 Promise 类型数据')
        setState({ ...state, status: 'loading' })
        retryRef.current = () => {
            if (config?.retry) {
                run(config.retry(), config)
            }
        }
        return promise
            .then((data) => {
                setData(data)
                return data
            })
            .catch((error) => {
                setError(error)
                return error
            })
    }
    return {
        isIdle: state.status === 'idle',
        isLoading: state.status === 'loading',
        isError: state.status === 'error',
        isSuccess: state.status === 'success',
        run,
        setData,
        setError,
        retry: retryRef.current,
        ...state,
    }
}
