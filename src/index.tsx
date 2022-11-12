import 'wdyr'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { DevTools, loadServer } from 'jira-dev-tool'
import 'antd/dist/antd.less'
import { AppProvider } from 'context'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
loadServer(() => {
    root.render(
        <AppProvider>
            <DevTools />
            <App />
        </AppProvider>,
    )
})
