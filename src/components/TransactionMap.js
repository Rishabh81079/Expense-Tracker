import { useContext } from "react"
import { GlobalStore } from "../utilities/Store"


function TransactionMap({value}){
const {btn} = useContext(GlobalStore)


    const sign = value.amount < 0 ? '-': '+'

    return (
        <ul className="mt-2">
            <li className="border flex justify-between mb-2">{value.text}<span>{sign}Rs.{Math.abs(value.amount).toFixed(2)}</span><button onClick={()=> btn(value.id)} className={sign == '-'? 'text-red-500' : 'text-green-500'}>x</button></li>
            
        </ul>
    )
}


export default TransactionMap