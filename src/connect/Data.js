import React, { useState } from 'react'


function Data() {
    const[input,setInput] = useState("")
    // const[all,setAll] = useState([])
    function addData(){
        if(input){
            setAll((previousState) =>[...previousState, input] )
            
        }
        
        }
  return (
    <>
    <div>
      <h1>data By js</h1>
      <input type='text' onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addData}>Add</button>
      
    </div>
    
    </>
  )
}

export default Data
