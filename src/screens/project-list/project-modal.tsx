import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { projectListActions, selectProjectModalOpen } from './project-lise.slice'

export const ProjectModal = () => {
    const dispatch = useDispatch()
    const projectModalOpen = useSelector(selectProjectModalOpen)
    return (
        <Drawer
            open={projectModalOpen}
            width={'100%'}
            onClose={() => dispatch(projectListActions.closeProjectModal())}></Drawer>
    )
}
