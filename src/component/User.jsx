import React, { Component } from 'react'

export class User extends Component {
  
      
  render() {
    const {avatar_url,html_url,login} = this.props.users
    return (
      <div className="card mb-3">
        <div className="row g-0">
        <div className="col-md-3">
            <img className='img-fluid avatar  rounded-start' src={avatar_url} alt={login} />
        </div>
        <div className="col-md-9">
            <div className="card-body">
                <h3 className="card-title">{login}</h3>
                
           
                <a rel='noreferrer' target='_blank' href={html_url} className='btn btn-primary'>Github Profile</a>
                
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default User