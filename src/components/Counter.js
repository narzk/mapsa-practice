import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  const [interValId, setInterValId] = useState(null)

  const handleCounter = (isPaused) => {
    if (!isPaused && !interValId) {
      setInterValId(setInterval(() => {
        setCount(count => count + 1)
      }, 1000))
    } else if (isPaused) {
      clearInterval(interValId)
      setInterValId(null)
    }
  }

  const reset = () => {
    setCount(0)
    clearInterval(interValId)
    setInterValId(null)
  }

  return (<>
    <div>{count}</div>
    <button onClick={() => setCount(count => count + 1)}>+</button>
    <button onClick={reset}>reset</button>
    <button onClick={() => handleCounter(false)}>start</button> 
    <button onClick={() => handleCounter(true)}>pause</button>
  </>)
}