// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Pricing from "./pages/sections/Pricing"
import Information from './pages/sections/Information'

function App() {
  return (
    <Routes>
      {/* Home/Landing Page */}
      <Route path="/" element={<Home />} />
      
      {/* Pricing Page */}
      <Route path="/pricing" element={<Pricing />} />
      
      {/* Information Page */}
      <Route path="/information" element={<Information />} />
    </Routes>
  )
}

export default App