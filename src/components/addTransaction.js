function AddTransaction(){
    return(
        <div className="mt-10 w-[50%]">
        <h1>History</h1>
        <div className="border-b mt-2"></div>
        <ul className="mt-2">
            <li className="border flex justify-between mb-2">Cash<span>0</span><button className="bg-green-400 w-2"></button></li>
            <li className="border flex justify-between mb-2">Book<span>0</span><button className="bg-red-400 w-2"></button></li>
            <li className="border flex justify-between">Camera<span>0</span><button className="bg-red-400 w-2"></button></li>
        </ul>
        </div>
    )
}


export default AddTransaction