import styled from '@emotion/styled'

import { ProjectListScreen } from 'screens/project-list'
import { PageHeader } from 'components/page-header'
import { Navigate, Route, Routes } from 'react-router'
import { ProjectScreen } from 'screens/project'
import { useState } from 'react'
import { ProjectModal } from 'screens/project-list/project-modal'
export const AuthenticatedApp = () => {
    const [projectModalOpen, setProjectModalopen] = useState(false)
    return (
        <Container>
            <PageHeader />
            <Main>
                <Routes>
                    <Route path="/projects" element={<ProjectListScreen />} />
                    <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
                    <Route index element={<ProjectListScreen />} />
                </Routes>
            </Main>
            <ProjectModal projectModalOpen={projectModalOpen} onClose={() => setProjectModalopen(false)} />
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem calc(100vh - 6rem);
`

const Main = styled.div``
