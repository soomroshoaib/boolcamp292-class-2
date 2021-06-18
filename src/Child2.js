import React,{useReducer} from 'react'
import CounterReducer from './CounterReducer'

function Child2() {
    const [state, dispatch] = useReducer(CounterReducer, 0)
    console.log(state)
    return (
        <div>
        <h2>Decrment value Reacuer {state}</h2>
        <button onClick={()=>{dispatch('decrament')}}>Decrment value Reacuer </button>
        <button onClick={()=>{dispatch('INCREAMENT')}}>Decrment value Reacuer </button>

            
        </div>
    )
}

export default Child2
