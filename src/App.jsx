import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [nums, setNums] = useState(true)
  const [chars, setChars] = useState(false)
  const [pass, setPass] = useState("")

  const passwordGenerator = () => {

    let passstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let str = "";
    if(nums){
      passstr += "0123456789"
    }
    if(chars){
      passstr += "!@#$%^&*(){}][_+-`~:;.,<>/?\|"
    }

    for(let i = 1;i <= length; i++){
      let index = Math.floor((Math.random()*passstr.length)+1)
      str += passstr[index]
    }
    setPass(str);

  }
  useEffect(() => {
    passwordGenerator()
  },[nums,chars,length,setPass])

  return (
    <>
      <div className='flex items-center flex-wrap justify-center rounded-xl border border-white py-3  max-w-[60%] pb-8 pt-8 px-7 '>
        <h1 className='font-bold text-3xl text-white shadow-lg underline mb-6'>Random Password Generator</h1>
        <input type="text" readOnly className='w-[80%] h-12 border rounded-xl mx-5 my-6 px-3 ' value={pass}/> 
        <button className='text-white bg-blue-700 h-12 rounded-xl w-[15%] hover:bg-blue-600 ' onClick={() => {navigator.clipboard.writeText(pass)}}>copy</button>
        <input className='mx-2' type="range" min={6} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}} />
        <label className='text-white cursor-pointer mx-4 my-3'>length : {length}</label>
        <input type="checkbox" className='cursor-pointer' checked onClick={() => {setNums(prev => !prev)}}/>
        <label className='text-white cursor-pointer mx-4 my-3' >numbers</label>
        <input type="checkbox" className='cursor-pointer' onClick={() => {setChars((prev) => (!prev))}} />
        <label className='text-white cursor-pointer mx-4 my-3'>special characters</label>
        
      </div>
    </>
  )
}

export default App
