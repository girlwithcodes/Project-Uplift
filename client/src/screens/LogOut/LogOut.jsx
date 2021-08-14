import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../Services/users';

function LogOut({setUser}) {
  const history = useHistory();

    useEffect(()=>{
      const logOut = async() => {
        await logout();
        setUser(null);
        history.push("/");
      }
      logOut();
    },[]);

    return ('');
}

export default LogOut;