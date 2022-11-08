import { ErrorBoundary } from 'components/error-Boundary'
import { AuthenticatedApp } from 'authenticated-app'
import { FullPageError } from 'components/loading'
import { useAuth } from 'context/auth-context'
import { UnauthenticatedApp } from 'unauthenticated-app'
import './App.css'

function App() {
    const { user } = useAuth()
    return (
        <div className="App">
            <ErrorBoundary fallbackRender={FullPageError}>
                
                {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
            </ErrorBoundary>
        </div>
    )
}

export default App
