import { useState } from 'react'
import './App.css'
import Tracks from './components/Tracks/Tracks.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tracks />
    </>
  )
}

export default App
