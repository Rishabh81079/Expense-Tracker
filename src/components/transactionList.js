import {  useContext, useState } from "react"
import { GlobalStore } from "../utilities/Store"





function TransactionList(){


const {transfer} = useContext(GlobalStore)

const [text,setText] = useState('')
const [amount, setAmount] = useState(0)

const onSubmit = (e)=>{
    e.preventDefault();

    const newt = {
        id: Math.floor(Math.random()*10000),
        text,
        amount: +amount
    }

    transfer(newt)
    setAmount(0)
    setText('')
}

    return(
        <div className="w-full mt-10 ">
        <h1>Add new transaction</h1>
        <div className="border-b"></div>
        <form className="flex flex-col" onSubmit={onSubmit}>
            <label htmlFor="text" className="text-sm mt-2">Text</label>
            <input id="text" type="text" placeholder="Enter Text... " value={text} className="border px-2" onChange={(e)=> setText(e.target.value)}/>
            <label htmlFor="amount" className="text-sm mt-2">Amount</label>
            <input id="amount" type="number" value={amount} placeholder="Enter Amount..." className="border px-2" onChange={(e)=> setAmount(e.target.value)}></input>
            <button className="border mt-5 mb-5">Add transaction</button>
        </form>
        
        </div>
    )
}


export default TransactionList