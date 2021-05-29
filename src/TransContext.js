import {useContext} from "react"
const hello = [
    {amount: 500, desc: "cash"},
    {amount: 400, desc: "book"},
    {amount: 500, desc: "camera"}
]

 export const  transactionContext = useContext(hello);