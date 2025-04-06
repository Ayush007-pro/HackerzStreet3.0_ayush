import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Schedule from './components/Schedule/Schedule.jsx'
import Tracks from './components/Tracks/Tracks.jsx'
import About_Us from './components/About Us/About_Us.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Sponsors />
      <Schedule />
      <Tracks />
      <About_Us />
      <Footer />
    </>
  )
}

export default App
