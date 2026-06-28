import { useState } from 'react'
import './App.css'
import Navbar from './components/ui/Navbar'
import Main from './pages/Main'
import Footer from './components/ui/Footer'

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Main />
      </main>
      <Footer/>
    </>
  )
}

export default App
