import styled from '@emotion/styled'
import { Row } from 'components/lib'
import { useAuth } from 'context/auth-context'
import { ProjectListScreen } from 'screens/project-list'
import logo from 'assets/logo.webp'
import { Dropdown, Menu, MenuProps } from 'antd'

export const AuthenticatedApp = () => {
    const { logout, user } = useAuth()
    const items: MenuProps['items'] = [
        {
            key: 'logout',
            label: <a onClick={logout}>登出</a>,
        },
    ]
    return (
        <Container>
            <PageHeader between>
                <HeaderLeft gap>
                    <Logo src={logo} />
                    <h2>项目</h2>
                    <h2>用户</h2>
                </HeaderLeft>
                <HeaderRight>
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>Hi,{user?.name}</a>
                    </Dropdown>
                </HeaderRight>
            </PageHeader>
            <Main>
                <ProjectListScreen />
            </Main>
        </Container>
    )
}
const Logo = styled.img`
    width: 18rem;
`
const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem calc(100vh - 6rem);
`
const PageHeader = styled(Row)`
    padding: 3.2rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.div``
