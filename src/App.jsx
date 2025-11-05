import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home_Page from './pages/Home_Page.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-gray-900 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
