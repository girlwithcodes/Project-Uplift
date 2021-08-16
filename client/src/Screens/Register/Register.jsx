import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../../Services/users';
import './Register.css';

function Register({setUser}) {

  const [registrationForm, setRegistrationForm] = useState({
    username: '',
    email: '',
    password: '',
    password_confirm: ''
  })
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');
  const history = useHistory();

  useEffect(()=>{
    const {password, password_confirm} = registrationForm;
    setPasswordMatch(password.length!==0 && password===password_confirm);
    setPasswordMessage('');
  },[registrationForm.password, registrationForm.password_confirm])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegistrationForm({
      ...registrationForm, 
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(passwordMatch) {
      const { username, email, password } = registrationForm;
      const newUser = await register({username, email, password});
      setUser(newUser);
      history.push('/');
    } else {
      setPasswordMessage("Passwords do not match");
    }
    
  }

  return (
    <div>
      <h2>Create an Account</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="label-input-reg">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={registrationForm.username}
            />
        </div>

        <div className="label-input-reg">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={registrationForm.email}
            />
        </div>

        <div className="label-input-reg">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={registrationForm.password}
            />
        </div>

        <div className="label-input-reg">
          <label htmlFor="password_confirm">Confirm Password:</label>
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            onChange={handleChange}
            value={registrationForm.password_confirm}
            />
        </div>
        <span>{passwordMessage}</span>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register;