import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home_Page from './pages/Home_Page.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
