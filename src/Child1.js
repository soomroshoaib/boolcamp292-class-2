import React, { useContext } from "react"
import Countercontext from "./Countercontext"

function Child1(){
    const asd = useContext(Countercontext)
    console.log(asd);
    return(
        <>
            <h1>pakistan zindabad</h1>
            <h3>i m : {asd[0]}</h3>
            <button onClick={()=>{asd[1](++asd[0])}}>Increament </button>
            <button onClick={()=>{asd[1](--asd[0])}}> decreament</button>
            
        </>

    )
}

export default Child1