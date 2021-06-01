import React, {useState} from 'react'

function Massage(props) {
    const [Ismorning, setmorning] = useState(false)
    return (
        <div>
            <h1> counting {props.counter}</h1>
            <h2 className={`box ${Ismorning ? 'Daylight' : ''}`}>
                day time = {Ismorning ? 'Good Morning' : ' Good Night'}
            </h2>
            <button onClick={()=>{
                setmorning(!Ismorning)
            }}>update changre</button>
        </div>
    )
}

export default Massage
