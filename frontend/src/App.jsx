import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdaStations from './pages/AdaStations';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';
import SeeStatus from './pages/SeeStatus';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import NavBar from './components/NavBar';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    <NavBar/>
    {/*<SiteHeadingAndNav/>*/}
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accessible-stations' element={<AdaStations />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/see-status' element={<SeeStatus />} />
        <Route path='/about' element={<About />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}
