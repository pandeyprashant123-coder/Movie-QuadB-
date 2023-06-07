import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movielist from './components/Movielist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Movielist/>
    </>
  )
}

export default App
