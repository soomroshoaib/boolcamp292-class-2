


import React,{useState} from 'react'
import Parent from "./Parent"
import Countercontext from "./Countercontext";

function App() {
  const count  = useState(25)
  return (
    <Countercontext.Provider value={count}>
    
    
      <Parent  />
   
    </Countercontext.Provider>
  )
}

export default App;

 