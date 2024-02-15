import React, { Component } from 'react'
import User from './User'
import Loading from './Loading'

export class UserList extends Component {
    
  render() {
    if(this.props.loading){
      return <Loading/>
    }
    return (
        <>
      {
        this.props.user.map((users) => (
            <User key={users.id} users={users}/>
        )) 
      }
      </>
    )
  }
}

export default UserList