

import Alert from './component/Alert';
import './App.css';
import Navbar from './component/Navbar';
import Search from './component/Search';
import UserList from './component/UserList';
import UserContextProvider from './Context/UserContext';
import AlertContextProvider from './Context/AlertContext';
const App =() =>  {

    return (
      <UserContextProvider>
        <AlertContextProvider>

            <Navbar/>
            <Search  />
            <Alert />
            <div className="mt-3 container">
                <UserList/>
            </div>
        </AlertContextProvider>
      </UserContextProvider>
    )
  }


export default App
