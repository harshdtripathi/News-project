import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './NewsPages/Landing'
import './App.css'

function App() {
  

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
        
    </div>
  )
}

export default App
