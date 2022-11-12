import { Link, Route, Routes } from 'react-router-dom'
import { DashboardScreen } from 'screens/dashboard'
import { EpicScreen } from 'screens/epic'

export const ProjectScreen = () => {
    return (
        <div>
            <h1>project</h1>
            <Link to={'dashboard'}>看板</Link>
            <Link to={'epic'}>任务组</Link>
            <Routes>
                <Route path="/dashboard" element={<DashboardScreen />} />
                <Route path="/epic" element={<EpicScreen />} />
                <Route index element={<DashboardScreen />} />
            </Routes>
        </div>
    )
}
