import { createContext, useReducer } from "react";
import AlertReducer from "../Reducer/AlertReducer";

export const AlertContext = createContext()


const AlertContextProvider =(props) => {
    const [state,dispatch] = useReducer(AlertReducer,null)
    
    const displayError=(msg,type)=>{
        dispatch({
            type:"SET_ALERT",error:{msg,type}
        })
    
        setTimeout(() => {
            dispatch({
                type:"REMOVE_ALERT"
            })
        }, 3000);
      }
      return(
        <AlertContext.Provider value={{
            error:state,
            displayError
        }}>
            {props.children}
        </AlertContext.Provider>
      )
}
export default AlertContextProvider