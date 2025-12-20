// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_Page from './pages/Home_Page.jsx';
import './index.css';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F9EBD3] text-gray-900 overflow-x-hidden font-sans">
      {/* Router setup */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
