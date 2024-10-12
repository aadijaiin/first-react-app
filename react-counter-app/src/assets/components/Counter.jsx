import React from 'react'
import { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
      <p>you have clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me!</button>
    </div>
  )
}

export default Counter
