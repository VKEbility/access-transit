import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ADAStationsPage from './pages/ADAStations';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import About from './pages/About';
import OurHeroes from './pages/OurHeroes';
import Alerts from './pages/Alerts';
import SiteHeadingAndNav from './components/Header/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/CurrentUserContext';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';

export default function App() {
	const { setCurrentUser } = useContext(UserContext);
	useEffect(() => {
		checkForLoggedInUser().then(setCurrentUser);
	}, [setCurrentUser]);

	return (
		<>
			<SiteHeadingAndNav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/our-heroes" element={<OurHeroes />} />
					<Route path="/alerts" element={<Alerts />} />
					<Route path="/accessible-stations" element={<ADAStationsPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/users/:id" element={<UserPage />} />
					<Route path="/users/:id/settings" element={<UserPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
		</>
	);
}
