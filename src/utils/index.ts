import { useEffect, useRef, useState } from 'react'

export const isFalsy = (value: unknown) => (value === 0 ? false : !value)
export const isVoid = (value: unknown) => value === undefined || value === null || value === ''
export const cleanObject = (object?: { [key: string]: unknown }) => {
    const result = { ...object }
    Object.keys(result).forEach((key) => {
        const value = result[key]
        if (isVoid(value)) {
            delete result[key]
        }
    })
    return result
}
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}
export const useDocumentTitle = (title: string, keepUnmount: boolean = true) => {
    const oldTitle = useRef(document.title).current
    useEffect(() => {
        document.title = title
    }, [title])
    useEffect(() => {
        return () => {
            document.title = oldTitle
        }
    }, [title, keepUnmount])
}
export const resetRoute = () => (window.location.href = window.location.origin)

export const useMountedRef = () => {}
