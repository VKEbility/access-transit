import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import siteLogo from '../assets/images/logo.svg';

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

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
          {currentUser ? (
            <>
              <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
              <li className="nav-link"><NavLink to="/our-heroes">Our Heroes</NavLink></li>
              <li className="nav-link"><NavLink to="/alerts">Service Alerts</NavLink></li>
              <li className="nav-link"><NavLink to='/users' end={true}>Users</NavLink></li>
              <li className="nav-link"><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
              <li className="nav-link"><NavLink to="/favorites">Favorites</NavLink></li>
            </>
          ) : (
            <>
              <li className="nav-link"><NavLink to='/login'>Login</NavLink></li>
              <li className="nav-link"><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
