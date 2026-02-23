import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [activePresses, setActivePresses] = useState(0);
  let isActive = activePresses === 0 ? false : true;
  const last4TimesRef = useRef([0, 0, 0, 0]);


  function handleTap() {
    setActivePresses((activePresses) => activePresses + 1);
    setTimeout(handleTimeout, 5000);
    last4TimesRef.current.shift();
    last4TimesRef.current.push(Date.now());
  }

  function handleTimeout() {
    setActivePresses(activePresses => activePresses - 1);
  }

  function calculateBpm(): number {
    let sumDeltas = 0;
    for (let i = 1; i < last4TimesRef.current.length; i++) {
      sumDeltas += last4TimesRef.current[i] - last4TimesRef.current[i-1];
    }
    const msPerBeat = sumDeltas / (last4TimesRef.current.length - 1);
    const bpms = 1 / msPerBeat;
    const bpm = Math.round(bpms*1000*60);
    return bpm;
  }

  return (
    <>
      <h1>Your BPM is {calculateBpm()}</h1>
      <button
      onPointerDown={handleTap}
      >
        Tap Me
      </button>
    </>
  )
}

export default App
