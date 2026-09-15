import { BrowserRouter } from 'react-router'
import { PublicRoutes } from './routes/PublicRoutes.jsx'

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  )
}

export default App
