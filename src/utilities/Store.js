import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState ={
 transactions : [
  { id: 1, text: "Salary", amount: 50000 },
  { id: 2, text: "Groceries", amount: -2500 },
  { id: 3, text: "Electricity Bill", amount: -1200 },
  { id: 4, text: "Freelance Work", amount: 8000 },
  { id: 5, text: "Restaurant", amount: -1500 },
  { id: 6, text: "Gym Membership", amount: -2000 },
  { id: 7, text: "Bonus", amount: 10000 },
  { id: 8, text: "Shopping", amount: -3000 },
]}



export const GlobalStore = createContext()



export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState); 
    
    console.log(useReducer(reducer,initialState));
    

    return (<GlobalStore.Provider value={{transactions:state.transactions}}>
        {children}
    </GlobalStore.Provider>)
}