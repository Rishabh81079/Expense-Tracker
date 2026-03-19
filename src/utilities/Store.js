import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState ={
 transactions : [
  
]}



export const GlobalStore = createContext()



export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState); 
    
    const btn = (id)=>{
        dispatch({type:"delete",
            payload:id
        })
    }    

    function transfer(transaction){
        dispatch({
            type: "Add",
            payload: transaction
        })
    }

    return (<GlobalStore.Provider value={{transactions:state.transactions, btn, transfer}}>
        {children}
    </GlobalStore.Provider>)
}