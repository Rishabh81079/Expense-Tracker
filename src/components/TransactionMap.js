


function TransactionMap({value}){

    const sign = value.amount < 0 ? '-': '+'

    return (
        <ul className="mt-2">
            <li className="border flex justify-between mb-2">{value.text}<span>{sign}Rs.{Math.abs(value.amount).toFixed(2)}</span><button className={sign == '-'? 'text-red-500' : 'text-green-500'}>x</button></li>
            
        </ul>
    )
}


export default TransactionMap