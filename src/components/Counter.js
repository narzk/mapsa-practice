import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  const counting=()=>{

//TODO increment

setCount(count=>count+1)

//Previous state. 0->1 , 0+1

  }

  const reset=()=>{
    setCount(0)
  }

const handleCounter=(isPaused)=>{
  const interValId= setInterval(function () {counting()}, 1000);
  if(isPaused){

      clearInterval(interValId)
  }
}


//reset done
//increment done
//decrement 
//pause

  return (<>
  <div>{count}</div>
  <button onClick={counting}>+</button>
  <button onClick={reset}>reset</button>
  <button onClick={()=>handleCounter(false)}>start</button>
  <button onClick={()=>handleCounter(true)}>pause</button>


  </>
  )
}
