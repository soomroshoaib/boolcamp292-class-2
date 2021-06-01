import  {useState} from "react";
import './App.css';
import Massage from "./Massage"
//import Child from "./Child"


function App() {
  const [count, setcount] = useState(1)
  
  return (
    <>
     <Massage counter={count} />
     <button onClick={()=>{
       setcount(count + 1)
     }}>click no</button>
    </>
  );
}

export default App;
