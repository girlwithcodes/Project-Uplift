import Nav from '../Nav/Nav'
import './Header.css';

function Header({user}) {
  return (
    <div className = "header">
      Header
      <Nav user={user}/>
    </div>
  )
}

export default Header;