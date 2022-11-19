import styled from '@emotion/styled'
import { Button, Divider, List, Popover, Typography } from 'antd'
import { useProject } from 'screens/project-list/service'

export const ProjectPopover = () => {
    const { data: projects, isLoading } = useProject()
    const pinnedProject = projects?.filter((project) => project.pin)
    const content = (
        <ContentContainer>
            <Typography.Text type="secondary">收藏项目</Typography.Text>
            <List>
                {pinnedProject?.map((project) => (
                    <List.Item>
                        <List.Item.Meta title={project.name} />
                    </List.Item>
                ))}
            </List>
            <Divider />
            <Button style={{ padding: 0 }} type="link">
                创建项目
            </Button>
        </ContentContainer>
    )
    return (
        <Popover placement="bottom" content={content}>
            <span>项目</span>
        </Popover>
    )
}
const ContentContainer = styled.div`
    min-width: 30rem;
`
