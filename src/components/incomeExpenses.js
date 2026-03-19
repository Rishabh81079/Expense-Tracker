import { useContext } from "react"
import { GlobalStore } from "../utilities/Store"

function IncomeExpenses(){

const {transactions} = useContext(GlobalStore)

    const amounts = transactions.map((value)=> value.amount)
    const balanceincome = amounts.filter((item)=> item>0).reduce((acc,am)=>(am+=acc),0)
    const balanceexpense = amounts.filter((item)=> item<0).reduce((acc,am)=>(am+=acc),0)


    return(
        <div className="flex border w-[50%] justify-around mt-10">
            <div>
                <h1>INCOME</h1>
                <span className="text-green-500 text-xl">Rs.{balanceincome}</span>
            </div>
            <div className="bg-black border-l"></div>
            <div>
                <h1>EXPENSE</h1>
                <span className="text-red-500 text-xl">Rs.{Math.abs(balanceexpense)}</span>
            </div>

        </div>
    )
}


export default IncomeExpenses