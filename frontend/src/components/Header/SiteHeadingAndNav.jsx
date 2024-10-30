import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { logUserOut } from "../../adapters/auth-adapter";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import DropdownMenu from "./DropdownMenu";
import siteLogo from '../../assets/images/logo.svg';

export default function SiteHeadingAndNav() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  const dropdownItems = currentUser ? [
    { label: 'Profile', path: `/users/${currentUser.id}` },
    { label: 'Preferences', path: `/users/${currentUser.id}/settings` },
    { label: 'Logout', action: handleLogout },
  ] : [];

  return (
    <>
      <header>
        <div id="site-logo-and-title-container">
          <a id="site-logo" href='/'><img src={siteLogo} alt="Site Logo" /></a>
          <a id="site-title" href='/'>AccessTransit</a>
        </div>
        <nav className="nav-bar">
          <ul className="nav-link-container">
            <li className="nav-link"><NavLink to='/'>Home</NavLink></li>
            <li className="nav-link"><NavLink to='/accessible-stations'>ADA Stations</NavLink></li>
            {currentUser ? (
              <>
                <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
                <li className="nav-link"><NavLink to="/alerts">Service Alerts</NavLink></li>
                <li className="nav-link"><NavLink to="/our-heroes">Our Heroes</NavLink></li>
                <li className="nav-link"><DropdownMenu title="Settings" items={dropdownItems} /></li>
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
      <hr></hr>
    </>
  )
}