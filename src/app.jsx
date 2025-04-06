import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SchedulePage from './components/SchedulePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SchedulePage />
    </>
  )
}

export default App
