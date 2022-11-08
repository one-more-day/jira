import React, { ReactNode } from 'react'
type FallbackRender = (props: { error: Error | null }) => React.ReactElement
export class ErrorBoundary extends React.Component<
    React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
    { error: Error | null }
> {
    state = { error: null }
    //当子组件抛出异常，捕获执行
    static getDerivedStateFromError(error: Error) {
        return error
    }
    render(): React.ReactNode {
        const { error } = this.state
        const { fallbackRender, children } = this.props
        if (error) {
            return fallbackRender({ error })
        }
        return children
    }
}
