import ReactDOM from "react-dom/client"
import Header from "./utilities/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/incomeExpenses"
import AddTransaction from "./components/addTransaction"
import TransactionList from "./components/transactionList"


function App(){
    return(
        <div className="w-[50%] mx-auto bg-gray-100 shadow">
        <Header></Header>
        <div className="mx-10">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <AddTransaction></AddTransaction>
        <TransactionList></TransactionList>
        </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)