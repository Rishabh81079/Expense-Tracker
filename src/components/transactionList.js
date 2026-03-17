function TransactionList(){
    return(
        <div className="w-[50%] mt-10 ">
        <h1>Add new transaction</h1>
        <div className="border-b"></div>
        <form className="flex flex-col">
            <label htmlFor="text" className="text-sm mt-2">Text</label>
            <input id="text" type="text" placeholder="Enter Text... " className="border px-2" />
            <label htmlFor="amount" className="text-sm mt-2">Amount</label>
            <input id="amount" type="number" placeholder="Enter Amount..." className="border px-2"></input>
            <button className="border mt-5 mb-5">Add transaction</button>
        </form>
        
        </div>
    )
}


export default TransactionList