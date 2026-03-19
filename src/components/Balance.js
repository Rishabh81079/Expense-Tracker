import { useContext } from "react"
import { GlobalStore } from "../utilities/Store"

function Balance(){


    const {transactions} = useContext(GlobalStore)

    const aomunts = transactions.map((value)=> value.amount)
    const balance = aomunts.reduce((acc,item)=> (acc+=item),0).toFixed(2)

    return(
        <div className="mt-5">
        <h2>YOUR BALANCE</h2>
        <span className="font-semibold text-3xl">Rs.{balance}</span>
        </div>
    )
}


export default Balance