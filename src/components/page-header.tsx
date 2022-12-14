import { Row } from 'components/lib'
import styled from '@emotion/styled'
import logo from 'assets/logo.webp'
import { Button, Dropdown, Menu, MenuProps } from 'antd'
import { useAuth } from 'context/auth-context'
import { resetRoute } from 'utils'
import { ProjectPopover } from './project-popover'
export const PageHeader = ({ setProjectModalOpen }: { setProjectModalOpen: (isOpen: boolean) => void }) => {
    const { logout, user } = useAuth()
    const items: MenuProps['items'] = [
        {
            key: 'logout',
            label: (
                <Button type="link" onClick={logout}>
                    登出
                </Button>
            ),
        },
    ]
    return (
        <Header between>
            <HeaderLeft gap>
                <Button type="link" onClick={resetRoute}>
                    <Logo src={logo} />
                </Button>
                <ProjectPopover setProjectModalOpen={setProjectModalOpen} />
                <span>用户</span>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown menu={{ items }}>
                    <Button type="link" onClick={(e) => e.preventDefault()}>
                        Hi,{user?.name}
                    </Button>
                </Dropdown>
            </HeaderRight>
        </Header>
    )
}
const Logo = styled.img`
    width: 18rem;
`
const Header = styled(Row)`
    padding: 3.2rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
