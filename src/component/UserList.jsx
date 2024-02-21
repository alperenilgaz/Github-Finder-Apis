import React, { Component, useContext } from 'react'
import User from './User'
import Loading from './Loading'
import { UserContext } from '../Context/UserContext'

const  UserList=() =>  {
    const {loading,users} = useContext(UserContext)

    if(loading){
      return <Loading/>
    }
    return (
        <>
      {
       users.map((users) => (
            <User key={users.id} users={users}/>
        )) 
      }
      </>
    )
  }


export default UserList