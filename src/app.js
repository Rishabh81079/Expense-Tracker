import ReactDOM from "react-dom/client"
import Header from "./utilities/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/incomeExpenses"
import AddTransaction from "./components/addTransaction"
import TransactionList from "./components/transactionList"
import { ContextProvider } from "./utilities/Store"

function App(){
    return(
        <ContextProvider >
        <div className="w-[50%] mx-auto bg-gray-100 shadow shadow-black">
        <Header></Header>
        <div className="mx-40">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <AddTransaction></AddTransaction>
        <TransactionList></TransactionList>
        </div>
        </div>
        </ContextProvider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)