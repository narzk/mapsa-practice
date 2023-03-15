import { useState } from "react"

export default function Input() {
  // 1.state
  // 2.onChange
  // 3.seState
  // 4.div

  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    const inputVal = event.target.value
    setInputValue(inputVal)
  }

  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      <div>{inputValue}</div>
    </>
  )
}
