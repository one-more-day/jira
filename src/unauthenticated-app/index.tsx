import { Button, Card, Divider, message } from 'antd'
import { useEffect, useState } from 'react'
import { LoginSreen } from './login'
import { RegisterSreen } from './register'
import styled from '@emotion/styled'
import logo from 'assets/logo.webp'
import left from 'assets/left.webp'
import right from 'assets/right.webp'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
`
const ShadowCard = styled(Card)`
    width: 40rem;
    min-height: 50rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
`
const Header = styled.div`
    background: url(${logo}) no-repeat center;
    padding: 5rem 0;
    width: 100%;
    background-size: 28rem;
`
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left center, right center;
    background-size: 69rem, 69rem;
    background-image: url(${left}), url(${right});
`
const Title = styled.h2`
    margin-bottom: 2.4rem;
    color: rgb(94, 108, 132);
`
export const LongButton = styled(Button)`
    width: 100%;
`
export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return (
        <Container>
            <Header />
            <Background />
            <ShadowCard>
                <Title>{isRegister ? 'JIRA注册' : 'JIRA登录'}</Title>
                {isRegister ? <RegisterSreen/> : <LoginSreen />}
                <Divider />
                <a onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? '已经有账号了?直接登录' : '没有账号?注册新账号'}
                </a>
            </ShadowCard>
        </Container>
    )
}
