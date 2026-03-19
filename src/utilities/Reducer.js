export const reducer = (state,action) =>{
    if(action.type == 'delete'){
        return {...state, transactions:state.transactions.filter(transaction => transaction.id !== action.payload)}        
    }  
    if(action.type == 'Add'){
        return {...state, transactions:[action.payload,...state.transactions]}        
    }   
    else
        return state

}