import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ADAStations from './pages/AllADAStations';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import About from './pages/About';
import OurHeroes from './pages/OurHeroes';
import Alerts from './pages/Alerts';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/CurrentUserContext';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import Favorites from './pages/Favorites';
import HeroCount from './pages/HeroCount';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-heroes' element={<OurHeroes />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/accessible-stations' element={<ADAStations />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/users/:id/settings' element={<UserPage />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/hero-count' element={<HeroCount />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}
