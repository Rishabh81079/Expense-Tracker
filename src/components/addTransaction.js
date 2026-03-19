import { useContext } from "react"
import { GlobalStore } from "../utilities/Store"
import TransactionMap from "./TransactionMap"



function AddTransaction(){
const {transactions} = useContext(GlobalStore)

    return(
        <div className="mt-10 w-[50%]">
        <h1>History</h1>
        <div className="border-b mt-2"></div>
        {transactions.map((value)=> <TransactionMap value={value} key={value.id}></TransactionMap>)}
        
        </div>
    )
}


export default AddTransaction