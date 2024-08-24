import { TOP } from './pages/TopPage'
import { FxTermsPage } from './pages/FxTermsPage'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<TOP/>} />
        <Route path='/fxterms' element={<FxTermsPage/>} />
      </Routes>
    </Router>
  )
}

export default App
