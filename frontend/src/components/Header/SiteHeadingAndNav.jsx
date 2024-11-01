import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { logUserOut } from '../../adapters/auth-adapter';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import siteLogo from '../../assets/images/logo.svg';
import { Menu, Container, Group, Button, Title } from '@mantine/core';
import { HiChevronDown } from 'react-icons/hi'; // Import an arrow icon

export default function SiteHeadingAndNav() {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

	const handleLogout = async () => {
		logUserOut();
		setCurrentUser(null);
		navigate('/');
	};

	const dropdownItems = currentUser
		? [
				{ label: 'Profile', path: `/users/${currentUser.id}` },
				{ label: 'Preferences', path: `/users/${currentUser.id}/settings` },
				{ label: 'Logout', action: handleLogout },
		  ]
		: [];

	return (
		<header>
			<Container>
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'flex-end',
						padding: '1rem 0', // Adjusted padding for better spacing
					}}
				>
					<a id="site-logo" href="/" style={{ marginLeft: '0rem' }}>
						<img src={siteLogo} alt="Site Logo" style={{ maxHeight: '80px' }} />
					</a>
					<Title order={1} style={{ fontSize: '3rem', margin: 0 }}>
						AccessTransit
					</Title>

					<nav style={{ flexGrow: 1 }}>
						<Group
							spacing="md"
							position="right"
							style={{
								justifyContent: 'flex-end',
							}}
						>
							<NavLink
								to="/"
								style={({ isActive }) => ({
									textDecoration: 'none',
									fontWeight: 'bold',
									color: 'black', // Keep it black
									borderBottom: isActive ? '2px solid blue' : 'none', // Underline for active link
								})}
							>
								Home
							</NavLink>
							<NavLink
								to="/accessible-stations"
								style={({ isActive }) => ({
									textDecoration: 'none',
									fontWeight: 'bold',
									color: 'black', // Keep it black
									borderBottom: isActive ? '2px solid blue' : 'none', // Underline for active link
								})}
							>
								ADA Stations
							</NavLink>
							{currentUser ? (
								<>
									<NavLink
										to="/about"
										style={({ isActive }) => ({
											textDecoration: 'none',
											fontWeight: 'bold',
											color: 'black', // Keep it black
											borderBottom: isActive ? '2px solid blue' : 'none', // Underline for active link
										})}
									>
										About
									</NavLink>
									<NavLink
										to="/alerts"
										style={({ isActive }) => ({
											textDecoration: 'none',
											fontWeight: 'bold',
											color: 'black', // Keep it black
											borderBottom: isActive ? '2px solid blue' : 'none', // Underline for active link
										})}
									>
										Service Alerts
									</NavLink>

									<Menu>
										<Menu.Target>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													cursor: 'pointer',
													fontWeight: 'bold',
													color: 'black', // Default color
												}}
											>
												<span>Settings</span>
												<HiChevronDown style={{ marginLeft: '0.5rem' }} />{' '}
												{/* Arrow icon */}
											</div>
										</Menu.Target>
										<Menu.Dropdown>
											{dropdownItems.map((item) =>
												item.action ? (
													<Menu.Item
														key={item.label}
														onClick={item.action}
														style={{ color: 'black', fontWeight: 'bold' }} // Keep dropdown item black
													>
														{item.label}
													</Menu.Item>
												) : (
													<Menu.Item
														key={item.label}
														component={NavLink}
														to={item.path}
														style={{ color: 'black', fontWeight: 'bold' }} // Keep dropdown item black
													>
														{item.label}
													</Menu.Item>
												)
											)}
										</Menu.Dropdown>
									</Menu>
								</>
							) : (
								<>
									<NavLink
										to="/login"
										style={{
											textDecoration: 'none',
											fontWeight: 'bold',
											color: 'black',
										}} // Keep Login item black
									>
										Login
									</NavLink>
									<NavLink
										to="/sign-up"
										style={{
											textDecoration: 'none',
											fontWeight: 'bold',
											color: 'black',
										}} // Keep Sign Up item black
									>
										Sign Up
									</NavLink>
								</>
							)}
						</Group>
					</nav>
				</div>
			</Container>
			<hr style={{ border: '1px solid #ddd', margin: '0' }} />
		</header>
	);
}
