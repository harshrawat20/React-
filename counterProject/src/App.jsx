import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15

  const addValue=()=>{
    console.log("value added",counter);
    //  counter=counter+1;
    if(counter<20)
     setCounter(counter+1)
  }
  const removeValue = () => {
    
    //  counter=counter+1;
    if(counter!=0)
    setCounter(counter - 1)
    console.log('value removed', counter)
  }
  let [counter,setCounter]=useState(15)

  return (
    <>
     
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
