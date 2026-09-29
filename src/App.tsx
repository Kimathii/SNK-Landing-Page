import { AccessibilityProvider } from './context/AccessibilityContext'
import AccessibilityModal from './components/AccessibilityModal'
import LandingPage from './screens/LandingPage'

function MainApp() {
  const handleSignUp = () => {
    window.location.href = 'https://snk-app.vercel.app/signup' // Or whatever the real app URL will be
  }

  const handleLogin = () => {
    window.location.href = 'https://snk-app.vercel.app/login' // Or whatever the real app URL will be
  }

  return (
    <div className="app-wrapper app-wrapper--desktop">
      <div
        className="desktop-main-content"
        style={{
          width: '100vw',
          height: '100vh',
          background: '#0B1628',
        }}
      >
        <div className="desktop-content-body">
          <div
            className="desktop-content-inner"
            style={{
              maxWidth: 'none',
              margin: '0 auto',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <LandingPage
              onSignUp={handleSignUp}
              onLogin={handleLogin}
            />
          </div>
        </div>
      </div>
      <AccessibilityModal />
    </div>
  )
}

export default function App() {
  return (
    <AccessibilityProvider>
      <MainApp />
    </AccessibilityProvider>
  )
}
