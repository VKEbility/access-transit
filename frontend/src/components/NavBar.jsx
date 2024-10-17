import { NavLink } from "react-router-dom"; // import NavLink from react-router-dom
import siteLogo from '../assets/SiteLogo.png';

const NavBar = () => {
  // return a nav with a ul and li for each NavLink; notice the use of NavLink from react-router-dom
  // the to prop is the path you want to go to
  return (
    <header>
      <div id="site-logo-and-title-container">
          <a href='/'><img src={siteLogo} alt="Site Logo" /></a>
          <a id='logo' href='/'>AccessTransit</a>
      </div>
      <nav className="nav-bar">
        <ul className="nav-link-container">
          <li className="nav-link"><NavLink to='/'>Home</NavLink></li>
          <li className="nav-link"><NavLink to='/accessible-stations'>Accessible Stations</NavLink></li>
          <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
          <li className="nav-link"><NavLink to='/login'>Login</NavLink></li>
          <li className="nav-link"><NavLink to='/sign-up'>Sign Up</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;