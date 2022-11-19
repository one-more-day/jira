import { Drawer } from 'antd'
interface Iprops {
    projectModalOpen: boolean
    onClose: () => void
}
export const ProjectModal = (props: Iprops) => {
    const { projectModalOpen, onClose } = props
    return <Drawer open={projectModalOpen} width={'100%'} onClose={onClose}></Drawer>
}
