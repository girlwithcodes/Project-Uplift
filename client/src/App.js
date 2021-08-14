import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { verify } from './Services/users';
import Layout from './Layout/Layout';
import Main from './Components/Main/Main';
import LogIn from './Screens/LogIn/LogIn';
import Register from './Screens/Register/Register';

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    const verifyUser = async() => {
      const verifiedUser = await verify();
      verifiedUser ? setUser(verifiedUser) : setUser(null);
      console.log(user)
    }
    verifyUser();
  },[])

  return (
    <div className="App">
      <Layout user={user}>
        <Main user={user}/>

        <Route path = "/login">
          <LogIn setUser={setUser}/>
        </Route>

        <Route path = "/register">
          <Register setUser={setUser}/>
        </Route>
      </Layout>
    </div>
  );
}

export default App;
