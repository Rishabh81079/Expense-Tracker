function IncomeExpenses(){
    return(
        <div className="flex border w-[50%] justify-around mt-10">
            <div>
                <h1>INCOME</h1>
                <span className="text-green-500 text-xl">$0.00</span>
            </div>
            <div className="bg-black border-l"></div>
            <div>
                <h1>EXPENSE</h1>
                <span className="text-red-500 text-xl">$0.00</span>
            </div>

        </div>
    )
}


export default IncomeExpenses