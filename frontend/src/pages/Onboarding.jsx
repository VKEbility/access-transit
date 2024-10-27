import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Language
import i18n from 'i18next';
import { useTranslation, Trans } from 'react-i18next';

const satisfiedUsers = ['picURL1', 'picURL2', 'picURL3'];

//onboarding page to be shown on home path if user is not logged in
export default function OnboardingPage() {
	const { t } = useTranslation(); // Get the translation function

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

	return (
		<main id="welcome-portion">
			<header id="welcome-header">
				<div id="welcome-button-container">
					<Link to="/about">
						<button id="welcome-button-link">{t('About')}</button>
					</Link>
					<Link to="/alerts">
						<button id="welcome-button-link">{t('serviceAlerts')}</button>
					</Link>
					<Link to="/accessibility-status">
						<button id="welcome-button-link">{t('seeStatus')}</button>
					</Link>
				</div>
				<h1 id="site-title-not-logged-in">Welcome To #AccessTransit</h1>
			</header>

			<div id="satisfied-users-image-container">
				{satisfiedUsers.map((_, index) => (
					<div key={index} className="satisfied-users"></div>
				))}
			</div>

			<div id="site-description-container">
				{/* keep the Trans inside <p> tags for styling */}
				<p id="site-description">
					<Trans i18nKey="description">
						The most trusted source for real-time status of your favorite MTA{' '}
						<strong>elevators, escalators, ADA stations</strong>, and{' '}
						<strong>subway alerts</strong> in YOUR language.
					</Trans>
				</p>
				<p id="site-description">{t('siteDescription')}</p>
			</div>

			<label htmlFor="language-select" id="select-language-label">
				Select language to get started:
			</label>
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
		</main>
	);
}
