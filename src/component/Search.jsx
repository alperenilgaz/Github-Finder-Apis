import React,{useContext, useState} from 'react'
import { UserContext } from '../Context/UserContext'
import { AlertContext } from '../Context/AlertContext'

 const Search = () =>  {
  const [keyword, setKeyword] = useState("")
  const{searchUsers,users,clearResult}=useContext(UserContext)
  const {displayError} = useContext(AlertContext)

  
 const onChangeInput=(e) => {
    e.preventDefault()
    setKeyword(e.target.value)
  
  }
const  onSubmit=(e) => {
    e.preventDefault()
    if(keyword===''){
     displayError('Anahtar Kelime Giriniz!','danger')
    }else{
     searchUsers(keyword)
      setKeyword("")
    }
   
  }

    return (
      <div className="container my-3">
        <form onSubmit={onSubmit}>
           <div className="input-group">
                <input value={keyword} onChange={onChangeInput} type="text" className='form-control' placeholder='search'/>
                <button className="btn btn-primary" type='submit'>Ara</button>
            </div>     
        </form>
        {users.length>0 && <button onClick={clearResult} className="btn btn-outline-danger mt-2 btn-block">Temizle</button> }
       
      </div>
    )
  }


export default Search