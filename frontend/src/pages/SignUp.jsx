import { useContext, useState, useEffect } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { createUser } from '../adapters/user-adapter';
import { FaArrowLeft } from 'react-icons/fa'; // Make sure to install react-icons

import '../styles/user-account.css';
import './css/SignUp.css';

//Language
import i18n from 'i18next';
import { useTranslation, Trans } from 'react-i18next';

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
	const { t } = useTranslation(); // Get the translation function

	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const [errorText, setErrorText] = useState('');
	const [rawUsername, setRawUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [language, setLanguage] = useState('');

	const [selectedLanguage, setSelectedLanguage] = useState(
		localStorage.getItem('i18nextLng') || 'en'
	);

	useEffect(() => {
		// Set the initial language when the component mounts
		i18n.changeLanguage(selectedLanguage);
	}, [selectedLanguage]); // Only re-run when selectedLanguage changes

	const handleLanguageChange = (event) => {
		const newLanguage = event.target.value;
		setSelectedLanguage(newLanguage);
		localStorage.setItem('i18nextLng', newLanguage); // Store the selected language
		i18n.changeLanguage(newLanguage); // Change the i18n language
		console.log(`Selected language: ${newLanguage}`);
	};

	// users shouldn't be able to see the sign up page if they are already logged in.
	// if the currentUser exists in the context, navigate the user to
	// the /users/:id page for that user, using the currentUser.id value
	if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

	const handleSubmit = async (event) => {
		event.preventDefault();
		setErrorText('');
		if (!email) return setErrorText('Missing email');
		if (!rawUsername) return setErrorText('Missing username');
		if (!password) return setErrorText('Missing password');
		if (!language) return setErrorText('Missing language preference');

		const upper = (val) => val.slice(0, 1).toUpperCase() + val.slice(1);
		const username = upper(rawUsername);
		console.log(username);
		const [user, error] = await createUser({
			username,
			password,
			email,
			language,
		});
		if (error) return setErrorText(error.message);

		setCurrentUser(user);
		navigate('/');
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === 'username') setRawUsername(value);
		if (name === 'password') setPassword(value);
		if (name === 'email') setEmail(value);
		if (name === 'language') setLanguage(value);
	};

	return (
		<>
			<h1>{t('sign_up')}</h1>
			<form
				id="user-signup-form"
				onSubmit={handleSubmit}
				onChange={handleChange}
				aria-labelledby="create-heading"
			>
				<h2 id="create-heading">{t('create_new_user')}</h2>
				<label htmlFor="email">{t('email_label')}</label>
				<input
					// className={inputStates.email.shake ? 'shake' : ''}
					autoComplete="on"
					type="email"
					id="email"
					name="email"
					onChange={handleChange}
					value={email}
					placeholder={t('email_placeholder')}
				/>
				{/* {inputStates.email.error && <p className="error-message">{inputStates.email.error}</p>} */}

				<label htmlFor="username">{t('username_label')}</label>
				<input
					autoComplete="off"
					type="text"
					id="username"
					name="username"
					onChange={handleChange}
					value={rawUsername}
					minLength="3"
					placeholder={t('username_placeholder')}
				/>
				{/* {inputStates.username.error && <p className="error-message">{inputStates.username.error}</p>} */}

				<label htmlFor="password">{t('password_label')}</label>
				<input
					autoComplete="off"
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					value={password}
					minLength="4"
					placeholder={t('password_placeholder')}
				/>
				{/* {inputStates.password.error && <p className="error-message">{inputStates.password.error}</p>} */}

				<label htmlFor="language">{t('choose_language')}</label>
				<select
					id="language-select"
					value={selectedLanguage}
					onChange={handleLanguageChange}
				>
					<option value="en">English</option>
					<option value="es">Spanish</option>
					<option value="fr">French</option>
					<option value="de">German</option>
					<option value="it">Italian</option>
					<option value="ja">Japanese</option>
					<option value="zh">Chinese(Simplified)</option>
					<option value="pt">Portuguese</option>
					<option value="ru">Russian</option>
					<option value="ar">Arabic</option>
					<option value="hi">Hindi</option>
					<option value="ko">Korean</option>
				</select>
				{/* {inputStates.language.error && <p className="error-message">{inputStates.language.error}</p>} */}

				{/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

				<button>{t('sign_up_now')}</button>
			</form>
			{!!errorText && <p>{errorText}</p>}{' '}
			{/*//converting err text to a boolean, will only be rendered if there's an err */}
			<p>
				{t('already_have_account')}{' '}
				<Link to="/login" className="link-log-in">
					{t('log_in')} <FaArrowLeft className="icon" />
				</Link>
			</p>
		</>
	);
}
