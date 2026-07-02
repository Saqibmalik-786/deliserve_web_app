import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/Navbar'
import Main from './pages/Main'
import Footer from './components/ui/Footer'
import Login from './pages/Login'
function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
