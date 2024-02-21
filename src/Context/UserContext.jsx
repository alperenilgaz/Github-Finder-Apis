import { createContext, useReducer, useState } from "react";
import UserReducer from '../Reducer/UserReducer'
export const UserContext = createContext()

const UserContextProvider=(props) => {
    const initialState = {
        users:[],
        loading:false
      }
      const [state,dispatch] = useReducer(UserReducer,initialState)

      const searchUsers = (keyword) => {
        setLoading()
        
       
          setTimeout(() => {
            fetch("https://api.github.com/search/users?q=" + keyword)
            .then(response => response.json())
            .then(data => {
              dispatch({
                type:"SEARCH_USERS",
                users:data.items,
          
              })
            })
          }, 1000);
          
        
      }
      const setLoading = () => {
        dispatch({
          type:"SET_LOADING"
        })
      }
      const clearResult =()=>{
        dispatch({
          type:"CLEAR_USERS"
        })
      }
      return(
        <UserContext.Provider value={{
            users:state.users,
            loading:state.loading,
            searchUsers,
            clearResult
        }}>
            {props.children}

        </UserContext.Provider>
      )
      
}
export default UserContextProvider