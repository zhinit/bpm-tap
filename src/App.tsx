import { useState } from 'react'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);

  function handleTap() {
    setIsActive(true);
  }

  return (
    <>
      <h1>Your BPM is 128</h1>
      <button
      onPointerDown={handleTap}
      >
        Tap Me
      </button>
      <p>{isActive ? "active" : "not active"}</p>
    </>
  )
}

export default App
