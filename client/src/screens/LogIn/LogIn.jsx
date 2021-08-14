import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../Services/users';
import './LogIn.css';

function LogIn(props) {

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  const { setUser } = props;
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = await login(loginInfo);
    setUser(user);
    history.push("/");
  }

  
  return (
    <div className="login-page">
      <h2>Log In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="label-input-li">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="label-input-li">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            />
        </div>
        <button>Log In</button>
      </form>
      <p> Need an Account? <Link to="/register">Create an Account</Link></p>
    </div>
  )
}

export default LogIn;