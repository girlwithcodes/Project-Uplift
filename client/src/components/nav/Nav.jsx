import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({user}) {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility((visibility)=>!visibility);
  }

  const setVisibilityClass = () => {
    return visibility ? "user-links" : "invisible user-links"
  }

  const loginLink = (
    <Link to="/login">Log In</Link>
  )

  const userLinks = (
    <div>
      <button 
        id="welcome-button"
        onClick={toggleVisibility}
        >
          Welcome, {user?.username} 
          <i className="arrow-down" />
      </button>
      <div className={setVisibilityClass()}>
        <Link to={`/user/${user?.id}/boards`}
        onClick={toggleVisibility}>My Boards</Link>
        <Link to='/logout'>Logout</Link>
      </div>
    </div>
  )

  return (
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/affirmations">Affirmations</Link>
      <Link to="/celebrations">Celebrations</Link>
      <Link to="/blessings">Blessings</Link>
      <Link to="/wisdom">Wisdom</Link>
      {user ? 
        userLinks 
        :
        loginLink}
      
    </nav>
  )
}

export default Nav;