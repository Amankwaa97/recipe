import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/home'
import Contact from './pages/Contact'

import Footer from './components/Footer'
import About from './pages/About'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
     <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<div><Navbar2 /><Contact /></div>} />
        <Route path="/about" element={<div><Navbar2 /><About /></div>} />
        
        

      </Routes>
      <Footer />
     </Router> 
    </div>
  )
}

export default App
