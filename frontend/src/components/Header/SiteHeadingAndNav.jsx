import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { logUserOut } from '../../adapters/auth-adapter';
import { logUserIn } from '../../adapters/auth-adapter';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import siteLogo from '../../assets/images/logo.svg';

import {
	Menu,
	Container,
	Group,
	Button,
	Title,
	TextInput,
	PasswordInput,
	Paper,
	Text,
} from '@mantine/core';
import { HiChevronDown } from 'react-icons/hi';

export default function SiteHeadingAndNav() {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const [opened, setOpened] = useState(false); // State to manage the dropdown visibility
	const [errorText, setErrorText] = useState('');
	const handleLogout = async () => {
		logUserOut();
		setCurrentUser(null);
		navigate('/');
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		setErrorText('');
		const formData = new FormData(event.target);
		const [user, error] = await logUserIn(Object.fromEntries(formData));
		if (error) return setErrorText(error.msg);
		setCurrentUser(user);
		setOpened(false); // Close the dropdown after successful login
		navigate(`/`); // Redirect to home or other page
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
						padding: '1rem 0',
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
									color: 'black',
									borderBottom: isActive ? '2px solid blue' : 'none',
								})}
							>
								Home
							</NavLink>
							<NavLink
								to="/accessible-stations"
								style={({ isActive }) => ({
									textDecoration: 'none',
									fontWeight: 'bold',
									color: 'black',
									borderBottom: isActive ? '2px solid blue' : 'none',
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
											color: 'black',
											borderBottom: isActive ? '2px solid blue' : 'none',
										})}
									>
										About
									</NavLink>
									<NavLink
										to="/alerts"
										style={({ isActive }) => ({
											textDecoration: 'none',
											fontWeight: 'bold',
											color: 'black',
											borderBottom: isActive ? '2px solid blue' : 'none',
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
													color: 'black',
												}}
											>
												<span>Settings</span>
												<HiChevronDown style={{ marginLeft: '0.5rem' }} />
											</div>
										</Menu.Target>
										<Menu.Dropdown>
											{dropdownItems.map((item) =>
												item.action ? (
													<Menu.Item
														key={item.label}
														onClick={item.action}
														style={{ color: 'black', fontWeight: 'bold' }}
													>
														{item.label}
													</Menu.Item>
												) : (
													<Menu.Item
														key={item.label}
														component={NavLink}
														to={item.path}
														style={{ color: 'black', fontWeight: 'bold' }}
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
									<Menu opened={opened} onClose={() => setOpened(false)}>
										<Menu.Target>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													cursor: 'pointer',
													fontWeight: 'bold',
													color: 'black',
												}}
												onClick={() => setOpened(true)} // Open the dropdown on click
											>
												<span>Login</span>
												<HiChevronDown style={{ marginLeft: '0.5rem' }} />
											</div>
										</Menu.Target>
										<Menu.Dropdown
											style={{
												padding: '10px',
												width: '350px',
												borderRadius: '8px',
												backgroundColor: '#fff',
											}}
										>
											<Paper>
												<form
													onSubmit={handleLogin}
													style={{
														display: 'flex',
														flexDirection: 'column',
														gap: '20px',
													}}
												>
													<TextInput
														label="Email or Username"
														name="emailOrUsername"
														placeholder="Enter your email or username"
														required
														size="lg"
													/>
													<PasswordInput
														label="Password"
														name="password"
														placeholder="Enter your password"
														required
														size="lg"
													/>
													<Button
														type="submit"
														fullWidth
														style={{
															backgroundColor: '#3c7fd0',
															color: 'white',
															marginTop: '10px',
														}}
													>
														Login
													</Button>
												</form>
												{errorText && (
													<Text color="red" style={{ marginTop: '10px' }}>
														{errorText}
													</Text>
												)}
											</Paper>
										</Menu.Dropdown>
									</Menu>
									<NavLink
										to="/sign-up"
										style={{
											textDecoration: 'none',
											fontWeight: 'bold',
											color: 'black',
										}}
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
