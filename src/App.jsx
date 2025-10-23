import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home_Page from './pages/Home_Page.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes path="/*">
          <Route path='/' element={<Home_Page/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
