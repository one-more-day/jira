import styled from '@emotion/styled'
import { Spin, Typography } from 'antd'
import { ReactNode } from 'react'
const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Loading = ({ children, ...props }: { children?: ReactNode }) => (
    <Container>
        <Spin size="large" />
    </Container>
)
export const FullPageError = ({ error }: { error: Error | null }) => (
    <Container>
        <Typography.Text>{error?.message}</Typography.Text>
    </Container>
)
