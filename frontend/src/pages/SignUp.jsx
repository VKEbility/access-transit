import { useContext, useState, useEffect } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { createUser } from '../adapters/user-adapter';
import { FaArrowLeft } from 'react-icons/fa';
import {
	Container,
	Title,
	TextInput,
	Button,
	Select,
	Text,
	Notification,
	Paper,
} from '@mantine/core';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

export default function SignUpPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const [errorText, setErrorText] = useState('');
	const [rawUsername, setRawUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const [selectedLanguage, setSelectedLanguage] = useState(
		localStorage.getItem('i18nextLng') || 'en'
	);

	useEffect(() => {
		i18n.changeLanguage(selectedLanguage);
	}, [selectedLanguage]);

	const handleLanguageChange = (value) => {
		setSelectedLanguage(value);
		localStorage.setItem('i18nextLng', value);
		i18n.changeLanguage(value);
	};

	if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

	const handleSubmit = async (event) => {
		event.preventDefault();
		setErrorText('');
		if (!email) return setErrorText(t('Missing email'));
		if (!rawUsername) return setErrorText(t('Missing username'));
		if (!password) return setErrorText(t('Missing password'));
		if (!confirmPassword) return setErrorText(t('Missing confirm password'));
		if (password !== confirmPassword)
			return setErrorText(t('Passwords do not match'));

		if (!selectedLanguage)
			return setErrorText(t('Missing language preference'));

		setLoading(true);
		const upper = (val) => val.charAt(0).toUpperCase() + val.slice(1);
		const username = upper(rawUsername);
		const [user, error] = await createUser({
			username,
			password,
			email,
			language: selectedLanguage, // Use selectedLanguage here
		});
		setLoading(false);

		if (error) return setErrorText(error.message);

		setCurrentUser(user);
		navigate('/');
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === 'username') setRawUsername(value);
		if (name === 'password') setPassword(value);
		if (name === 'confirmPassword') setConfirmPassword(value); // Handle confirm password change

		if (name === 'email') setEmail(value);
	};

	return (
		<Container size="sm" style={{ marginTop: '20px' }}>
			<Title order={1} align="center" style={{ fontSize: '50px' }}>
				{t('Sign Up')}
			</Title>
			<Paper>
				<form id="user-signup-form" onSubmit={handleSubmit}>
					<TextInput
						label={t('Register Email')}
						autoComplete="on"
						type="email"
						name="email"
						onChange={handleChange}
						value={email}
						placeholder={t('Register Email')}
						required
						size="lg"
						style={{ marginBottom: '20px', fontSize: '18px' }}
					/>
					<TextInput
						label={t('Create Username')}
						autoComplete="off"
						type="text"
						name="username"
						onChange={handleChange}
						value={rawUsername}
						minLength="3"
						placeholder={t('Create Username')}
						required
						size="lg"
						style={{ marginBottom: '20px', fontSize: '18px' }}
					/>
					<TextInput
						label={t('Create Password')}
						autoComplete="off"
						type="password"
						name="password"
						onChange={handleChange}
						value={password}
						minLength="4"
						placeholder={t('Create Password')}
						required
						size="lg"
						style={{ marginBottom: '20px', fontSize: '18px' }}
					/>
					<TextInput
						label={t('Confirm Password')}
						autoComplete="off"
						type="password"
						name="confirmPassword"
						onChange={handleChange}
						value={confirmPassword}
						minLength="4"
						placeholder={t('Confirm Password')}
						required
						size="lg"
						style={{ marginBottom: '20px', fontSize: '18px' }}
					/>
					<Select
						label={t('choose_language')}
						value={selectedLanguage}
						onChange={handleLanguageChange}
						data={[
							{ value: 'en', label: 'English' },
							{ value: 'es', label: 'Spanish' },
							{ value: 'fr', label: 'French' },
							{ value: 'de', label: 'German' },
							{ value: 'it', label: 'Italian' },
							{ value: 'ja', label: 'Japanese' },
							{ value: 'zh', label: 'Chinese (Simplified)' },
							{ value: 'pt', label: 'Portuguese' },
							{ value: 'ru', label: 'Russian' },
							{ value: 'ar', label: 'Arabic' },
							{ value: 'hi', label: 'Hindi' },
							{ value: 'ko', label: 'Korean' },
						]}
						size="lg"
						style={{ marginBottom: '20px', fontSize: '18px' }}
					/>
					<Button type="submit" fullWidth loading={loading} size="lg">
						{t('sign_up_now')}
					</Button>
				</form>
				{errorText && (
					<Notification color="red" title="Error" style={{ marginTop: '20px' }}>
						{errorText}
					</Notification>
				)}
				<Text align="center" style={{ marginTop: '20px', fontSize: '18px' }}>
					{t('already_have_account')}{' '}
					<Link
						to="/login"
						className="link-log-in"
						style={{ fontSize: '18px' }}
					>
						{t('log_in')} <FaArrowLeft className="icon" />
					</Link>
				</Text>
			</Paper>
		</Container>
	);
}
