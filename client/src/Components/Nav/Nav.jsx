import { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeIcon, affirmationIcon, celebrationIcon, blessingsIcon, wisdomIcon, hamburgerMenu, xIcon } from '../../Assets/Icons';
import './Nav.css';


function Nav({user}) {
  const [visibility, setVisibility] = useState(false);
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility((visibility)=>!visibility);
  }

  const setVisibilityClass = () => {
    return visibility ? "user-links" : "invisible user-links";
  }

  const toggleSideBarVisibility = () => {
    setSideBarVisibility((prevVisibility)=>!prevVisibility);
  }

  const setSideBarClass = () => {
    return sideBarVisibility ? "sidebar-menu" : "sidebar-menu invisible";
  }


  const loginLink = (
    <div className="nav-button-div">
      <Link to="/login">
        <button className="nav-welcome-button">Log In</button>
      </Link>
    </div>
  )

  const userLinks = (
    <div className="user-links-div">
      <div className="nav-button-div">
        <button 
          className="nav-welcome-button"
          onClick={toggleVisibility}
          >
            Welcome, {user?.username} 
          <span className="arrow-down-span">
            <i className="arrow-down" />
          </span>  
        </button>
      </div>

      <ul className={setVisibilityClass()}>
        <li><Link to={`/user/${user?.id}/boards`}
        onClick={toggleVisibility}>My Boards</Link></li>

        <li><Link to={`/posts/${user?.id}/create`}
        onClick={toggleVisibility}>Create Post</Link></li>
        
        <li><Link to='/logout' 
        onClick={toggleVisibility}>Logout</Link></li>
      </ul>
    </div>
  )

  const sidebarMenu = (
    <div className={setSideBarClass()}>
      <div className="x-icon-div" onClick={toggleSideBarVisibility}>
        {xIcon}
      </div>

      <ul className="sidebar-links">
        <li className="sidebar-link" onClick={toggleSideBarVisibility}>
          <Link to="/">
            <div className= "nav-icon-div sidebar-icon-div" id="sidebar-home-icon-div">
            <span id="sidebar-home-icon">{homeIcon}</span>
            <span className="sidebar-text">Home</span>
            </div>
          </Link>
        </li>

        <li className="sidebar-link" onClick={toggleSideBarVisibility}>
          <Link to="/affirmations">
            <div className= "nav-icon-div sidebar-icon-div" >
              {affirmationIcon}
              <span className="sidebar-text">Affirmations</span>
            </div>
          </Link>
        </li>

        <li className="sidebar-link" onClick={toggleSideBarVisibility}>
          <Link to="/celebrations">
            <div className= "nav-icon-div sidebar-icon-div" >
              {celebrationIcon}
              <span className="sidebar-text">Celebrations</span>
            </div>
          </Link>
        </li>

        <li className="sidebar-link" onClick={toggleSideBarVisibility}>
          <Link to="/blessings">
            <div className= "nav-icon-div sidebar-icon-div" >
              {blessingsIcon}
              <span className="sidebar-text">Blessings</span>
            </div>
          </Link>
        </li>

        <li className="sidebar-link" onClick={toggleSideBarVisibility}>
          <Link to="/wisdom">
            <div className= "nav-icon-div sidebar-icon-div" >
              {wisdomIcon}
              <span className="sidebar-text">Wisdom</span>
            </div>
          </Link>
        </li>

        {user ? 
        (
          <>
          <li>
            <Link to={`/user/${user?.id}/boards`}
              onClick={toggleVisibility}>
              <div className= "nav-icon-div sidebar-icon-div">
              <span className="sidebar-text">My Boards</span>
              </div>
            </Link>
          </li>

        <li>
          <Link to={`/posts/${user?.id}/create`}
            onClick={toggleVisibility}>
            <div className= "nav-icon-div sidebar-icon-div">
            <span className="sidebar-text">Create Post</span>
            </div>
          </Link>
        </li>
        
        <li>
          <Link to='/logout' 
            onClick={toggleVisibility}>
            <div className= "nav-icon-div sidebar-icon-div">
            <span className="sidebar-text">Logout</span>
            </div>
          </Link>
        </li>
        </>
        ) 
        :
        (<li className="sidebar-link" 
          onClick={toggleSideBarVisibility}>
          <Link to="/login">
            <div className= "nav-icon-div sidebar-icon-div" >
              <span className="sidebar-text">Log In</span>
            </div>
          </Link>
        </li>)
        }
      </ul>

      
    </div>
  )

  return (
    <nav className="nav-links">
      <div className="hamburger-menu-div" onClick={toggleSideBarVisibility}>
        {hamburgerMenu}
      </div>

      {sidebarMenu}

      <Link to="/">
        <div className= "nav-icon-div horz" id="logo-home-icon-div">
          {homeIcon}
        </div>
      </Link>

      <Link to="/affirmations">
        <div className="nav-icon-div horz">
          {affirmationIcon}
        </div>
      </Link>

      <Link to="/celebrations">
        <div className="nav-icon-div horz">
          {celebrationIcon}
        </div>
      </Link>

      <Link to="/blessings">
        <div className="nav-icon-div horz">
          {blessingsIcon}
        </div>
      </Link>

      <Link to="/wisdom">
        <div className="nav-icon-div horz">
          {wisdomIcon}
        </div>
      </Link>

      {user ? 
        userLinks 
        :
        loginLink}
      
    </nav>
  )
}

export default Nav;