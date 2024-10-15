import { NavLink } from "react-router-dom"; // import NavLink from react-router-dom

const NavBar = () => {
  // return a nav with a ul and li for each NavLink; notice the use of NavLink from react-router-dom
  // the to prop is the path you want to go to
  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-link-container">
          <a id='logo' href='/'>AccessTransit</a>
          <li className="nav-link"><NavLink to='/'>Home</NavLink></li>
          <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
          <li className="nav-link"><NavLink to='/login'>Login</NavLink></li>
          <li className="nav-link"><NavLink to='/sign-up'>Sign Up</NavLink></li>
          <li className="nav-link"><NavLink to='/user'>Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;