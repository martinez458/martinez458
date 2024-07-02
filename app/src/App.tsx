import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom'

import { FxTermsPage } from './pages/FxTermsPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/fxterms' element={<FxTermsPage/>} />
      </Routes>
    </Router>
  )
}

export default App
