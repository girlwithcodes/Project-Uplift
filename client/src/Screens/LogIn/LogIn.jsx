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
    try {
      const user = await login(loginInfo);
      setUser(user);
      history.push("/");
    } catch(error) {
      console.error(error)
    }
  }
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Log In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="label-input-li">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="text-input-li"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="label-input-li">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="text-input-li"
              id="password"
              name="password"
              onChange={handleChange}
              />
          </div>
          <button className="form-button">Log In</button>
        </form>
        <p className="sign-up-link"> Need an Account? <Link to="/register">Create an Account</Link></p>
      </div>
    </div>
  )
}

export default LogIn;