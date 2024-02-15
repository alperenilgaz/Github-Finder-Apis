

import Alert from './component/Alert';
import './App.css';

import Navbar from './component/Navbar';
import Search from './component/Search';

import UserList from './component/UserList';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading:false,
      user:[],
      error:null
    }
  }
  clearResult =()=>{
    this.setState({user:[]})
  }

  searchUsers = (keyword) => {
 
      this.setState({loading:true})
      setTimeout(() => {
        fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => this.setState({user:data.items, loading:false}))
          
      }, 1000);
      
    
  }
  displayError=(msg,type)=>{
    this.setState({error:
      {
      msg:msg,
      type:type
    }
    })

    setTimeout(() => {
        this.setState({error:null})
    }, 3000);
  }
  render() {

    return (
      <div>
      <Navbar/>
      <Search displayError={this.displayError} showClearBtn={this.state.user.length>0 ? true:false} searchUsers={this.searchUsers} clearResult={this.clearResult}/>
      <Alert error={this.state.error}/>
      <div className="mt-3 container">
      <UserList loading={this.state.loading} user={this.state.user}/>
      </div>
    </div>
    )
  }
}

export default App
