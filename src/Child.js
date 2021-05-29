import React, { useContext } from 'react'
import {hello} from "./TransContext"

function Child() {

 let TransContext  = useContext(hello);
  
    return (
        <div className="moves">

            <h1 className="text">Expence Tracker</h1>

            <div>
                <h3>YOUR BALANCE <br/> $260.00</h3>
            </div>

            <div className="blue">
                <h3>INCOME <br/> <span style={{color:'blue'}}> $500 </span> </h3>
                <h3>EXPENSE <br/> <span> $240</span> </h3>
            </div>

            <h3>History</h3>


            <hr />

            <ul className="hello">
            {hello.map((transObj, index)=>{
                return(
                    <li>
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
                
                </li>
                )
            })}
               

               
            </ul>

            <h3>Add a transaction </h3>
            <hr/> 

            <form>
                <label>
                    Enter your Description <br/>
                    <input type="number"/>
                </label> <br/>

                <label>
                    Enter your Amount <br/>
                    <input type="number"/>
                </label>
                <br/>
                <input type=" Submit" value="add your transction"/>
            </form>

            
        </div>
    )
}

export default Child
