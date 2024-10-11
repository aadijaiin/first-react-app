import { useState } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  )
}

export default App
