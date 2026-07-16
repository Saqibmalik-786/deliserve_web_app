import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/ui/Navbar'
import Main from '@/pages/Main'
import Footer from '@/components/ui/Footer'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import BecomePartner from '@/pages/BecomePartner'
import ProtectedRoute from '@/routes/ProtectedRoute'
function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/become-partner" element={
            <ProtectedRoute>
              <BecomePartner />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
