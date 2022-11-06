import { Button, Card, Divider } from 'antd'
import { useState } from 'react'
import { LoginSreen } from './login'
import { RegisterSreen } from './register'
import styled from '@emotion/styled'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
const ShadowCard = styled(Card)`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
`
export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return (
        <Container>
            <ShadowCard>
                {isRegister ? <RegisterSreen /> : <LoginSreen />}
                <Divider />
                <a onClick={() => setIsRegister(!isRegister)}>{isRegister ? '已经有账号了?直接登录' : '没有账号?注册新账号'}</a>
            </ShadowCard>
        </Container>
    )
}
