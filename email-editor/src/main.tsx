import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './AuthContext.js'
import { Home } from './Home'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   }, 
//   {
//     path: '/about-us',
//     element: <div>About us</div>
//   }
// ])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error ('Failed to find the root element')

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <Home />
    </AuthProvider>
  </StrictMode>,
)
