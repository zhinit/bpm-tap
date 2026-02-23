import { useState } from 'react'
import './App.css'

function App() {
  const [activePresses, setActivePresses] =useState(0);
  let isActive = activePresses === 0 ? false : true;

  function handleTap() {
    setActivePresses((activePresses) => activePresses + 1);
    setTimeout(handleTimeout, 5000);
  }

  function handleTimeout() {
    setActivePresses(activePresses => activePresses - 1);
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
