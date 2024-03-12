import { useState } from 'react'
import './App.css'
import NavBar  from './Components/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <div>
    <h1>Estefanía :D</h1>
    </div>
      
      
    </>
  )
}

export default App
