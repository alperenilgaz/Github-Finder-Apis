import React, { Component } from 'react'

export class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       keyword:''
    }
  }
  onChangeInput=(e) => {
    e.preventDefault()
    this.setState({
      keyword:e.target.value
    })
  }
  onSubmit=(e) => {
    e.preventDefault()
    if(this.state.keyword===''){
      this.props.displayError('Anahtar Kelime Giriniz!','danger')
    }else{
      this.props.searchUsers(this.state.keyword)
      this.setState({
        keyword:''
      })
    }
   
  }
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
           <div className="input-group">
                <input value={this.state.keyword} onChange={this.onChangeInput} type="text" className='form-control' placeholder='search'/>
                <button className="btn btn-primary" type='submit'>Ara</button>
            </div>     
        </form>
        {this.props.showClearBtn && <button onClick={this.props.clearResult} className="btn btn-outline-danger mt-2 btn-block">Temizle</button> }
       
      </div>
    )
  }
}

export default Search